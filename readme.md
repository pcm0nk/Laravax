<p align="center">
  <img src="https://raw.githubusercontent.com/fumeapp/laranuxt/main/resources/laranuxt.png" width="200" />
</p>

## Laravel + Nuxt.js + Vuetify + Pinia Boilerplate - Laravax

> Example of Authentication,Light & Dark Mode In Vuetify,Double Navigation Drawer, Multiple Layouts with different style and using pinia in nuxt 3 enviorment.

This project was forked from **[fumeapp/laranuxt](https://github.com/fumeapp/laranuxt)** then I added vuetify theme in dark and light mode, authentication with passport and pinia and some more which you can chech it at [Whats Included](#Whats-Included)

## :warning: I removed some of the packages that came from the forked project
### Back-end

    + fumeapp/modeltyper: ^1.0,
     acidjazz/humble: ^3.0,
     acidjazz/metapi: ^2.1,
     barryvdh/laravel-debugbar: ^3.5,

### Front-end
    - @tailvue/nuxt: ^0.1.62,
    - dayjs: ^1.10.7,
    - husky: ^8.0.1,
    - @iconify/vue: ^4.0.0,
    - nuxt-windicss: ^2.5.5,
    - lottie-web: ^5.8.1,

### Whats Included

* [Laravel](https://laravel.com) - Backend Framework Version 9
  * [Model Typer](https://github.com/fumeapp/modeltyper) - Generates Typescript interfaces from Laravel Models 
  * [MetAPI](https://github.com/fumeapp/metapi) - API helpers and utilities
  * [humble](https://github.com/fumeapp/humble) - Passwordless sessioning with detailed device and location
  * [debugbar](https://github.com/barryvdh/laravel-debugbar) - awesome debugbar for our API
  * [ide-helper](https://github.com/barryvdh/laravel-ide-helper) - Helper files to enable help with IDE autocompletion

* [NUXT v3](https://nuxt.com) front end, a progressive Vue.js framework - For Nuxt v2 visit [this branch](https://github.com/fumeapp/laranuxt/tree/nuxt2)
  * [tailvue](https://github.com/fumeapp/tailvue) a collection of components built for Nuxt.js, powered by WindiCSS|TailwindCSS
  * [Authentication library](https://github.com/fumeapp/laranuxt#api-and-authentication) to assist with user sessions and logging in/out
  * Example Authentication Middleware

### Installation

* clone from GitHub
* run `yarn` and `composer install` to install all of your deps
* configure `.env` to your needs
* TL;DR
 ```bash
git clone git@github.com:fumeapp/laranuxt.git; cd laranuxt; yarn; composer install; cp .env.example .env;
 ```
* Feel free to delete excess media in  `/resources/`


### Local Environment
* run `yarn dev` in one terminal for our nuxt dev setup
* run `yarn api` (alias for `./artisan serve`) in another terminal for our laravel API

### Api and Authentication

* Api and auth can be accessed via the provided `Api` library

```ts
const api = useApi()
console.log(api.$user.name);
```

#### Authentication

* Take a look at [HeaderLoginModal.vue](https://github.com/fumeapp/laranuxt/blob/main/client/components/header/HeaderLoginModal.vue#L143) to see how we pass the credentials to our library
```ts
  const redirect = await api.login(result)
  if (redirect) await router.push({path: redirect})
```
* Once logged on, you have the boolean `api.loggedIn` and the object `api.$user`
```html
  <img class="w-8 h-8 rounded-full bg-blue-400" :src="api.$user.avatar" alt="User Avatar">
```

#### API
The API class provides helper functions to easily retrieve, update, and remove data from your Laravel endpoints.  If you use and update [modeltyper](https://github.com/fumeapp/modeltyper) regularly you will always have completely typed results

* To get a listing/index of data, use `api.index`
```ts
const users = api.index<models.UserResults>('/user', { page: 1 })
```

* To get an individual by id, use `api.get`
```ts
const users = api.get<models.User>('/user/1')
```

* To update with an id, use `api.put`
```ts
const result = api.put<api.MetapiResponse>('/user/1', user)
```

* To store a new record, use `api.store`
```ts
const result = api.store<api.MetApiResponse>('/user', { name: 'Bob', email: 'bob@mail.com' })
```

* To delete with an id, use `api.delete`
```ts
const result = api.delete<api.MetApiResponse>('/user/1')
```
