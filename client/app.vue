<script>
import { useTheme } from "vuetify";

const thesnackbar = defineAsyncComponent(() =>
  import("./components/reusable/snackbar.vue")
);
export default {
  setup() {
    const theme = useTheme();
    const config = useRuntimeConfig();

    return {
      theme,
      config,
    };
  },
  components: {
    thesnackbar,
  },
  data() {
    return {
      layoutname: "companylayout",
    };
  },
  methods: {
    toggleTheme() {
      if (this.theme.current.value.dark == false) {
        this.theme.global.name.value = "DarkTheme";
        this.themetype = "DarkTheme";
      } else {
        this.theme.global.name.value = "LightTheme";
        this.themetype = "LightTheme";
      }
    },
  },
  created() {
    console.log(this.$route.name);
    if (this.$route.name == "auth-signin") {
      this.layoutname = "authlayout";
    } else if (this.$route.path == "/") {
      this.layoutname = "homelayout";
    } else if (this.$route.path.indexOf("company") != -1) {
      this.layoutname = "companylayout";
    }
  },

  mounted() {},

  watch: {
    $route(to, from) {
      if (to.name == "auth-signin") {
        this.layoutname = "authlayout";
      } else if (to.path == "/") {
        this.layoutname = "homelayout";
      } else if (to.path.indexOf("company") != -1) {
        this.layoutname = "companylayout";
      }
    },
  },
};
</script>

<template>
  <v-app id="app">
    <NuxtLayout :name="layoutname">
      <thesnackbar>
        <NuxtPage />
      </thesnackbar>
      <v-btn
        variant="plain"
        style="position: absolute; bottom: 10px; right: 10px"
        icon
        @click="toggleTheme"
      >
        <v-icon v-if="theme.global.name.value == 'LightTheme'"
          >mdi-weather-night</v-icon
        >
        <v-icon v-if="theme.global.name.value == 'DarkTheme'"
          >mdi-weather-sunny</v-icon
        >
      </v-btn>
    </NuxtLayout>
  </v-app>
</template>
