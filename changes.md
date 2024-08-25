<p align="center">
  <img src="https://github.com/pcm0nk/Laravax/blob/main/resources/laravax.png" width="80%" />
</p>

## Changes

### Version 1.0.12

- Added .env file
- Fixed migration errors
- Upgraded to Laravel 11
- Upgraded to Nuxt 3.12.4 With Nitro 2.9.7
- Upgraded to Vuetify 3.6.14
- Upgraded to Pinia
- Removed duplicate configuration in config/passport.php
- removed windi.config.ts
- removed tsconfig.json
- added companydashboard to AuthConfig interface
- fixed logout route 404
- made auth middleware global so no need to define it in everypage but it path must include `company`
