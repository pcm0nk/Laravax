import Api from '@/lib/api'
let api: Api

export const useApi = () => {
  if (!api) {
    const config = useRuntimeConfig()
    api = new Api({
      fetchOptions: {
        baseURL: config.public.baseURL,
      },
      apiURL: config.public.apiURL,
      webURL: config.public.webURL,
      redirect: {
        companydashboard: '/company/dashboard',
        logout: '/auth/signin',
        login: '/auth/signin',
      },
      /*
      echoConfig: {
        pusherAppKey: config.public.pusherAppKey,
        pusheAppCluster: config.public.pusherAppCluster,
      },
      */
    })
  }
  return api
}
