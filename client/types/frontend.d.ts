
export interface BreadCrumb {
  name: string
  to?: RouteLocationRaw
  icon?: string
}

export interface UserLogin {
  token: string
  user: models.User
  provider: string
  error?: string
  action?: LoginAction
}

export interface AuthConfig {
  fetchOptions: FetchOptions<'json'>
  webURL: string
  apiURL: string
  redirect: {
    companydashboard: string,
    logout: string,
    login: undefined | string
  }
  echoConfig?: EchoConfig,
}

export interface EchoConfig {
  pusherAppKey: string
  pusherAppCluster: string

}

export interface LoginAction {
  action: string
  url: string
}


