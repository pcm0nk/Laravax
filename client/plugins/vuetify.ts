import { createVuetify, ThemeDefinition, useDisplay } from 'vuetify'
import 'vuetify/styles'
import { VApp } from 'vuetify/components/VApp'
import { VAlert } from 'vuetify/components/VAlert'
import { VOverlay } from 'vuetify/components/VOverlay'
import { VNavigationDrawer } from 'vuetify/components/VNavigationDrawer'
import { VAppBar, VAppBarTitle, VAppBarNavIcon } from 'vuetify/components/VAppBar'
import { VIcon } from 'vuetify/components/VIcon'
import { VImg } from 'vuetify/components/VImg'
import { VCard, VCardTitle, VCardText, VCardActions } from 'vuetify/components/VCard'
import { VDivider } from 'vuetify/components/VDivider'
import { VList, VListItem, VListGroup, VListItemTitle, VListItemSubtitle } from 'vuetify/components/VList'
import { VRating } from 'vuetify/components/VRating'
import { VForm } from 'vuetify/components/VForm'
import { VToolbar,VToolbarItems,VToolbarTitle } from 'vuetify/components/VToolbar'
import { VExpansionPanels, VExpansionPanel, VExpansionPanelText, VExpansionPanelTitle } from 'vuetify/components/VExpansionPanel'
import { VBtn } from 'vuetify/components/VBtn'
import { VAutocomplete } from 'vuetify/components/VAutocomplete'
import { VMain } from 'vuetify/components/VMain'
import { VTabs } from 'vuetify/components/VTabs'
import { VLazy } from 'vuetify/components/VLazy'
import { VDialog } from 'vuetify/components/VDialog'
import { VLayout } from 'vuetify/components/VLayout'
import { VSnackbar } from 'vuetify/components/VSnackbar'
import { VFooter } from 'vuetify/components/VFooter'
import { VCol, VRow, VContainer, VSpacer } from 'vuetify/components/VGrid'
import { VTextField } from 'vuetify/components/VTextField'
import { VNoSsr } from 'vuetify/components/VNoSsr'
import { Ripple, Scroll, ClickOutside } from 'vuetify/directives'
import { VDataTable,VDataTableVirtual } from 'vuetify/components/VDataTable'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
// Translations provided by Vuetify
import { fa, en } from 'vuetify/locale'
import { mdi } from 'vuetify/iconsets/mdi'

//Labs Component




const LightTheme: ThemeDefinition = {
  dark: false,

  colors: {
    background: '#e1e2ec',
    'on-background': '#1b1b1f',
    'background-darken-1': '#121212',
    surface: '#fbfbfb',
    'surface-disabled': '#F2F2F0',
    'on-surface': '#1b1b1f',
    'surface-variant': '#eeeeee',
    'surface-darken-1': '#44464f',
    'surface-lighten-1': '#bbbbbb',

    primary: '#0056d0',
    'primary-lighten-1': '#4d8be7',
    'primary-darken-1': '#0064ef',
    'on-primary': '#ffffff',
    'primary-container': '#dae2ff',
    'primary-darken-2': '#001847',

    secondary: '#333b93', // '#4f56a9',
    'secondary-darken-1': '#0f1341',
    'on-secondary': '#ffffff',
    'secondary-container': '#000c60',
    'secondary-darken-2': '#030865',

    tertiary: '#fab702',
    'on-tertiary': '#ffffff',
    'tertiary-container': '#ffdea5',
    'tertiary-darken-1': '#934b00',
    'tertiary-darken-2': '#311300',

    error: '#ba1a1a',
    'on-error': '#ffffff',
    'error-container': '#ffdad6',
    'error-darken-1': '#6e0003',

    'icon-delete-color': '#b90000',
    'icon-edit-color': '#ff7e00',
    'icon-primary-color': '#0056d0',
    'secondtextcolor': '#909090',


    'card-title-bg': '#0f1341',
    'table-tr-odd': '#a6bbe1',

    accent: '#82B1FF',
    info: '#2979FF',
    success: '#388E3C',
    warning: '#ff9100',
    'navcolor': '#0060d7',
    'secondnavcolor': '#0f1341',
    'outlined-color': '#757780'
  }
}
const DarkTheme: ThemeDefinition = {
  dark: true,

  colors: {
    background: '#121212',
    'on-background': '#eaeaea',
    'background-darken-1': '#5d5d5d',
    surface: '#1b1b1f',
    'surface-disabled': '#161619',
    'on-surface': '#e4e2e6',
    'surface-variant': '#44464f',
    'surface-darken-1': '#767780',
    'surface-lighten-1': '#bbbbbb',


    primary: '#b1c5ff',
    'primary-lighten-1': '#527ab6',
    'primary-darken-1': '#0f1341',
    'on-primary': '#1b1b1f',
    'primary-container': '#0040a0',
    'primary-darken-2': '#dae2ff',

    secondary: '#c1b0ff', //'#bcc3ff',
    'secondary-darken-1': '#0f1341',
    'on-secondary': '#1e2578',
    'secondary-container': '#373e90',
    'secondary-darken-2': '#e0e0ff',

    tertiary: '#ffb778',
    'on-tertiary': '#4c2700',
    'tertiary-container': '#5d4200',
    'tertiary-darken-1': '#934b00',
    'tertiary-darken-2': '#ffdcc1',

    'card-title-bg': '#363957',
    'table-tr-odd': '#2b354f',

    'icon-delete-color': '#cc7878',
    'icon-edit-color': '#d5aa79',
    'icon-primary-color': '#729ddc',
    'secondtextcolor': '#909090',


    error: '#ffb4ab',
    'on-error': '#690005',
    'error-container': '#93000a',
    'error-darken-1': '#ffdad6',

    accent: '#82B1FF',
    info: '#b0c6ff',
    success: '#82db7e',
    warning: '#ffb68e',
    'navcolor': '#1f2027',
    'secondnavcolor': '#333333',

    'outlined-color': '#757780'

  }
}
export default defineNuxtPlugin((nuxtApp) => {
  const themetype = useCookie('themetype') || 'DarkTheme'

  const vuetify = createVuetify({
    defaults: {
      VBtn: {
        color: 'primary'
      },
      VTooltip: {
        contentClass: "bg-surface-variant text-surface-lighten-1"
      },
      VFileInput: {
        clearable: false,
        prepend: "",

      },
      VAlert: {
        class: 'text-right',
      },
      VDialog: {
        scrim: '#606060'
      }
    },
    ssr: true,
    locale: {
      locale: 'en',
      fallback: 'en',
      messages: { fa, en },
      rtl: {
        fa: false
      }
    },
    components: {
      VAlert,
      VOverlay,
      VNavigationDrawer,
      VDataTable,VDataTableVirtual,
      VAppBar,
      VAppBarTitle,
      VAppBarNavIcon,
      VDivider,
      VImg,
      VSnackbar,
      VIcon,
      VCard, VCardText, VCardTitle, VCardActions,
      VForm,
      VList, VListGroup, VListItem, VListItemSubtitle, VListItemTitle,
      VRating,
      VApp,
      VToolbar,VToolbarItems,VToolbarTitle,
      VTextField,
      VRow,
      VContainer,
      VSpacer,
      VCol,
      VLayout,
      VDialog,
      VLazy,
      VTabs,
      VNoSsr,
      VMain,
      VAutocomplete,
      VFooter,
      VBtn,
      VExpansionPanels,VExpansionPanel,VExpansionPanelText,VExpansionPanelTitle
    },
    directives: {
      Ripple,
      Scroll,
      ClickOutside
    },
    icons: {
      defaultSet: 'mdi',
      sets: {
        mdi,
      },
    },
    theme: {

      defaultTheme: themetype,
      /* variations: {
         colors: ['primary', 'secondary'],
         lighten: 1,
         darken: 2,
       },*/
      themes: {
        LightTheme,
         DarkTheme
      },

    },

  })

  nuxtApp.vueApp.use(vuetify);
})

