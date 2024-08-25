<p align="center">
  <img src="https://github.com/pcm0nk/Laravax/blob/main/resources/laravax.png" width="80%" />
</p>

## Laravel 11 + Nuxt.js 3 + Vuetify + Pinia Boilerplate - Laravax

![](resources/laravax.gif?raw=true)
> Example of Authentication,Light & Dark Mode In Vuetify,Double Navigation Drawer, Multiple Layouts with different style and using pinia in nuxt 3 enviorment.

This project was forked from **[fumeapp/laranuxt](https://github.com/fumeapp/laranuxt)** then I added Vuetify using tree shaking with custom dark and light mode, Authentication with Passport and Pinia and some more which you can chech it at [Whats Included](#Whats-Included)

## :warning: I removed some of the packages that came from the forked project
* **Back-end**
    * fumeapp/modeltyper: ^1.0
    * acidjazz/humble: ^3.0
    * acidjazz/metapi: ^2.1
    * barryvdh/laravel-debugbar: ^3.5

* **Front-end**
    - @tailvue/nuxt: ^0.1.62
    - dayjs: ^1.10.7
    - husky: ^8.0.1
    - @iconify/vue: ^4.0.0
    - nuxt-windicss: ^2.5.5
    - lottie-web: ^5.8.1

## Whats Included

### Backend
* [Laravel](https://laravel.com) - Backend Framework Version 11
  * [Passport](https://laravel.com/docs/11.x/passport) - Authenticating APIs using Laravel 

### Frontend
* [NUXT v3](https://nuxt.com) (Front-end, A Progressive Vuejs framework

  * [Vuetify](https://vuetifyjs.com/) (UI Library with beautifully handcrafted Vue Components)
    + Implemented custom Dark and Light mode
    + Added a double navigation drawer which the second one only opens after choosing something from the first one
    + Different layouts for Home,Signin,Dashboard

  * [Pinia](https://pinia.vuejs.org/) (Store library and state management framework for Vue 3)
     + Added Email and password rules in pinia and called it in auth/signing.vue 

## Installation Instructions

* clone from GitHub
* run `composer install` to install all of your Back-end deps
* run `npm install` to install all of your Front-end deps
* configure `.env` to your needs (change dbname,username,password)
* run `php artisan migrate` to create related tables and rows

**Command Line**
 ```
 git clone git@github.com:pcm0nk/laravax.git
 cd laravax
 composer install
 npm install
 //after configuring .env run the command below
 php artisan migrate
 ```
 ### :stop_sign: Security Concern
 After Your tests are done and you have the boilerplate running you should do these two things
 * Must run `php artisan key:generate` to have a unique **Laravel App Key**
 * Must run `php artisan passport:keys --force` to regenerate passport keys to make sure you have unique keys

 _If you dont do this,Your **Application Key** which is used for CSRF token and your **Passport Secret Keys** are exposed to every developer who used this repo (If that make sense)_


You can remove media in  `/resources/`

### Local Environment
* run `npm dev` in one terminal for Nuxt 
* run `php artisan serve` in another terminal for Laravel

### Api and Authentication

* Api and auth can be accessed via the provided `Api` library which is based on the forked project for more info visit **[fumeapp/laranuxt](https://github.com/fumeapp/laranuxt)**

```ts
//typescript
const api = useApi()
console.log(api.$user.name);
```

#### Authentication

* Take a look at auth/signin.vue in order to login we call useApi().login  
```ts
//typescript
  const redirect = await api.login(result)
  if (redirect) await router.push({path: redirect})
```
* Once logged on, you have the boolean `api.loggedIn` and the object `api.$user`
```html
  <img class="w-8 h-8 rounded-full bg-blue-400" :src="api.$user.avatar" alt="User Avatar">
```

#### API
The API class provides helper functions to easily retrieve, update, and remove data from your Laravel endpoints. 

* To get a listing/index of data, use `api.index`
```ts
//typescript
const users = api.index<models.UserResults>('/user', { page: 1 })
```

* To get an individual by id, use `api.get`
```ts
//typescript
const users = api.get<models.User>('/user/1')
```

* To update with an id, use `api.put`
```ts
//typescript
const result = api.put<api.MetapiResponse>('/user/1', user)
```

* To store a new record, use `api.store`
```ts
//typescript
const result = api.store<api.MetApiResponse>('/user', { name: 'Bob', email: 'bob@mail.com' })
```

* To delete with an id, use `api.delete`
```ts
//typescript
const result = api.delete<api.MetApiResponse>('/user/1')
```
### Vuetify Custom Dark And Light Mode

* **Custome Theme** And **Tree Shaking:**  To change the color of the Dark or Light mode or to add/remove components using vuetify tree shaking check its plugin `plugin/vuetify.ts`

**Snackbar composition api**

*  The implemented snackbar code is a copy of [Vuetify + Composition API Snackbar component that can be used globally](https://gist.github.com/wobsoriano/2f3f0480f24298e150be0c13f93bac20)

### Pinia

* Example on how to use pinia in `auth/signing.vue`

