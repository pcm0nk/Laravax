<script>
import { useTheme } from 'vuetify'

const thesnackbar = defineAsyncComponent(() =>
  import('./components/reusable/snackbar.vue')
)
export default {
  setup () {
    const theme = useTheme()
    const config = useRuntimeConfig()
    return {
      theme,config,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'LightTheme' : 'DarkTheme'
    }
  },
  components: {
    thesnackbar,
  },
  data() {
    return {
      layoutname: 'companylayout'
    }
  },
  created() {
    console.log(this.$route.name)
    if (this.$route.name == "auth-signin") {
      this.layoutname = 'authlayout'
    }
    else if (this.$route.path == "/") {
      this.layoutname = 'homelayout'
    }
    else if (this.$route.path.indexOf('company') != -1) {
      this.layoutname = 'companylayout'
    }
  },

  mounted() {
    console.log(this.config.IGNITION_THEME)
  },

  watch: {
      $route (to, from){
        if (to.name == "auth-signin") {
        this.layoutname = 'authlayout'
      }
     else if (to.path == "/") {
        this.layoutname = 'homelayout'
      }
     else if (to.path.indexOf('company') != -1){
        this.layoutname = 'companylayout'
      }
      }
  }
}
</script>

<template>
   <v-app id="app">
     <NuxtLayout :name="layoutname" >
      <thesnackbar>
      <NuxtPage />
      
    </thesnackbar>
    <v-btn variant="plain" style="position:absolute;bottom:10px;right:10px" icon @click="toggleTheme">
    <v-icon v-if="theme.global.name.value == 'LightTheme'">mdi-weather-night</v-icon>
    <v-icon  v-if="theme.global.name.value == 'DarkTheme'">mdi-weather-sunny</v-icon>
    </v-btn>
  </NuxtLayout>
</v-app>
</template>

