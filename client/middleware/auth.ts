export default defineNuxtRouteMiddleware((to, from) => {
  const thecookie  = useCookie('token');
  if (thecookie.value == undefined) {
    abortNavigation()
   return navigateTo('/auth/signin')
  }
})
