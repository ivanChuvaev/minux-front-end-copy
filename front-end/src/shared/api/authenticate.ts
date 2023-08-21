type TRequest = {
  username: string
  password: string
}

type TResponse = {
  accessToken: string | null
}

export const authenticate = async (request: TRequest): Promise<TResponse> => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (request.username === 'admin' && request.password === 'admin') {
        resolve({accessToken: 'dummyAccessToken'})
      }
      reject('fuck you')
    }, 1000)
  })
}
