import { getUserInfo } from "../api"
import { useQuery } from 'react-query'
import { useAccessToken } from "../model"

export const useGetUserInfoQuery = () => {
  const accessToken = useAccessToken()
  const queryFn: typeof getUserInfo = async () => {
    return await getUserInfo({})
  }
  return useQuery(['get user info', accessToken.value], queryFn)
}
