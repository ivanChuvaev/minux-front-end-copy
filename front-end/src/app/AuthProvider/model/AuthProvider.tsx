import { useJunkStoreSavedStateObj } from "@shared/lib"
import { PropsWithChildren, createContext, useContext, useMemo } from "react"
import { useGetUserInfoQuery } from "../hooks"
import { useJunkStoreSaved } from "@shared/stores"

type TContext = {
  isAuthenticated: boolean | undefined,
  credentials: {
    username: string
  }
}

const context = createContext<TContext>(null as any)
export const useAuthContext = () => useContext(context)
export const useAccessToken = () => useJunkStoreSavedStateObj('accessToken')
export const getAccessToken = () => useJunkStoreSaved.getState().accessToken

export const AuthProvider = (props: PropsWithChildren) => {
  const userInfoQuery = useGetUserInfoQuery()
  const username = useMemo(() => userInfoQuery.data?.username ?? '', [userInfoQuery.data])
  const isAuthenticated = useMemo(() => {
    if (userInfoQuery.isFetching) return undefined;
    if (userInfoQuery.error !== null) return false
    return true
  }, [userInfoQuery.error, userInfoQuery.isFetching])

  return (
    <context.Provider value={{ isAuthenticated, credentials: { username: username }}}>
      {props.children}
    </context.Provider>
  )
}
