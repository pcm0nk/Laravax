export default defineNuxtRouteMiddleware((to, from) => {
  const thecookie = useCookie('token');
  if (thecookie.value == undefined && to.path.includes('company')) {
    abortNavigation()
    return navigateTo('/auth/signin')
  }
})
