import type { FetchError, FetchOptions, SearchParameters } from 'ofetch'
import { $fetch } from 'ofetch'
import { reactive, ref } from 'vue'
import type { Router } from 'vue-router'
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

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
  echoConfig?: EchoConfig
}

export interface EchoConfig {
  pusherAppKey: string
  pusherAppCluster: string

}

export interface LoginAction {
  action: string
  url: string
}

const authConfigDefaults: AuthConfig = {
  fetchOptions: {},
  webURL: 'http://localhost:3000',
  apiURL: 'http://localhost/',
  redirect: {
    companydashboard: '/company/dashboard',
    logout: 'auth/signin.vue',
    login: 'auth/signin.vue',
  },
}

export default class Api {
  public token = useCookie<string | undefined>('token', { path: '/', maxAge: 60 * 60 * 24 * 30 })
  public config: AuthConfig
  public $user = reactive<models.User>({} as models.User)
  public $echo: undefined | Echo = undefined
  public loggedIn = ref<boolean | undefined>(undefined)
  public modal = ref<boolean>(false)
  public redirect = ref<boolean>(false)
  public action = ref<LoginAction | undefined>(undefined)

  public nuxtApp = useNuxtApp()

  constructor(config: AuthConfig) {
    this.config = { ...authConfigDefaults, ...config }
    this.checkUser()
  }

  on(redirect: boolean, action?: LoginAction | undefined) {
    this.redirect.value = redirect
    this.modal.value = true
    this.action.value = action
  }

  off() {
    this.modal.value = false
  }

  checkUser() {
    if (this.token.value !== undefined) {
      this.loggedIn.value = true
      // this.setUser().then(() => {
      // })
      // .catch(() => {
      //this.loggedIn.value = false
      //})

    }
    else { this.loggedIn.value = false }
  }

  setEcho() {
    if (!this.config.echoConfig)
      return
    if (!import.meta.client)
      return
    window.Pusher = Pusher
    this.$echo = new Echo({
      broadcaster: 'pusher',
      key: this.config.echoConfig.pusherAppKey,
      cluster: this.config.echoConfig.pusherAppCluster,
      authEndpoint: `${this.config.apiURL}/broadcasting/auth`,
      forceTls: true,
      encrypted: true,
      auth: {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${this.token.value || ''}`,
        },
      },
    })
  }


  async login(userinfo: { email: string, password: string }, discreet = false): Promise<string | object> {
    const userResult = await this.setUser(userinfo)
    this.loggedIn.value = true
    //this.setEcho()
    setTimeout(() => { this.nuxtApp.$router.push(this.config.redirect.companydashboard) }, 3000)
    return userResult
  }
  //Using the fetchOption to fetch whatever we want by using api.get-api.store and those that are below
  private fetchOptions(params?: SearchParameters, method = 'GET'): FetchOptions<'json'> {
    const fetchOptions = this.config.fetchOptions
    fetchOptions.headers = {
      Accept: 'application/json',
      Authorization: `Bearer ${this.token.value || ''}`,
      Referer: this.config.webURL,
    }
    fetchOptions.method = method
    fetchOptions.onRequest = () => {
      this.nuxtApp.callHook('page:start').catch(() => { })
    }
    fetchOptions.onResponse = () => {
      this.nuxtApp.callHook('page:finish').catch(() => { })
    }
    fetchOptions.onResponseError = (error) => {
      this.throwerror(error as unknown as FetchError).catch(() => { })
    }
    delete this.config.fetchOptions.body
    delete this.config.fetchOptions.params
    if (params) {
      if (method === 'POST' || method === 'PUT')
        this.config.fetchOptions.body = params
      else
        this.config.fetchOptions.params = params
    }
    return this.config.fetchOptions
  }

  public async setUser(userinfo: { email: string, password: string }): Promise<object> {
    let result: any = []
    let snackbar: any = { message: '', color: 'error' }
    try {

      result = await this.store('/login', {
        email: userinfo.email,
        password: userinfo.password
      })
      console.log(result)
      if (result.status == 'Fine') {
        Object.assign(this.$user, result)
        this.token.value = result.token
        // this.setEcho()
        snackbar.message = 'Login successfull! Redirecting to dashboard'
        snackbar.color = 'success'
      } else if (result.status == 'Not Fine') {
        if (result.code.message == 'The user credentials were incorrect.') {
          snackbar.message = result.code.message
          snackbar.color = 'error'
        }
      } else if (result.status == 'Email not verified') {
        snackbar.message = result.status
        snackbar.color = 'error'

      } else if (result.status == 'Already Loggedin') {
        snackbar.message = 'Already loggedin! Redirecting to dashboard'
        snackbar.color = 'info'

      }

    } catch (error) {
      await this.invalidate()
    }
    return snackbar
  }
  //the function to send api to backend
  public async index<Results>(endpoint: string, params?: SearchParameters): Promise<Results> {
    return await $fetch<Results>(endpoint, this.fetchOptions(params))
  }

  public async get<Results>(endpoint: string, params?: SearchParameters): Promise<Results> {
    return await $fetch<Results>(endpoint, this.fetchOptions(params))
  }

  public async update<Response>(endpoint: string, params?: SearchParameters): Promise<Response | undefined> {
    return await $fetch<Response>(endpoint, this.fetchOptions(params, 'PUT'))
  }

  public async store<Response>(endpoint: string, params?: SearchParameters): Promise<Response | undefined> {
    return await $fetch<Response>(endpoint, this.fetchOptions(params, 'POST'))
  }

  public async delete<Response>(endpoint: string, params?: SearchParameters): Promise<Response | undefined> {
    return await $fetch<Response>(endpoint, this.fetchOptions(params, 'DELETE'))
  }

  public async attempt(token: string | string[]): Promise<UserLogin> {
    if (Array.isArray(token))
      token = token.join('')

    try {
      return (await $fetch<api.MetApiResponse & { data: UserLogin }>(`/login/${token}`, this.fetchOptions())).data
    }
    catch (error) {
      await this.throwerror(error as FetchError)
      throw (error)
    }
  }

  public upload(url: string, params?: SearchParameters) {
    return $fetch(url, { method: 'PUT', body: params })
  }

  public async throwerror(error: FetchError): Promise<void> {
    if (error.response?.status === 401) {
      return await this.invalidate()
    }
    if (error.response?.status === 402) {
      console.log('requires payment');
      throw error
    }
    if (error.response?._data && error.response._data.errors?.error?.reason) {
      for (const err of error.response._data.errors) {
        console.log(err.detail ?? err.message ?? '')
      }
    }

    if (error.response?.status === 403) {
      console.log(error.response._data.message,)
    }

    if (error.response?._data.exception) {
      //replace it with snackbar

      // this.$toast.show({
      //   wide: true,
      //   type: 'danger',
      //   message: `
      //   <b>[${error.response._data.exception}]</b><br />
      //   ${error.response._data.message}<br />
      //   <a href="phpstorm://open?file=/${error.response._data.file}&line=${error.response._data.line}">
      //     ${error.response._data.file}:${error.response._data.line}
      //   </a>`,
      //   timeout: 0,
      // })
    }
  }

  public async logout(router: Router): Promise<void> {
    if (this.$echo)
      this.$echo.disconnect()
    const response = (await $fetch<api.MetApiResults>('/logout', this.fetchOptions()))
    //replace it with snackbar
    // this.$toast.show(Object.assign(response.data as ToastProps, { timeout: 1 }))
    await this.invalidate(router)
  }

  public async invalidate(router?: Router): Promise<void> {
    this.token.value = undefined
    this.loggedIn.value = false
    Object.assign(this.$user, {})
    if (router)
      await router.push(this.config.redirect.logout)
    else if (import.meta.client && document.location.pathname !== this.config.redirect.logout)
      document.location.href = this.config.redirect.logout
  }
}
