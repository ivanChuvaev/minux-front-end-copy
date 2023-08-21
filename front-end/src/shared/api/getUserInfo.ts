import { getAccessToken } from "@app/AuthProvider"

type TRequest = {}

type TResponse = { username: string }

export const getUserInfo = async (request: TRequest): Promise<TResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (getAccessToken() === 'dummyAccessToken') {
        resolve({ username: 'admin' })
      }
      reject("get user info error")
    }, 200)
  })
}
