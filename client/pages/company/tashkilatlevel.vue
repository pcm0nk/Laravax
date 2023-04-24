<script>
import { useSnackbar } from '~/composables/useSnackbar'
import { useMainStore } from '@/store/mainstore'
const draggable = defineAsyncComponent(() =>
  import('vuedraggable'),
  { ssr: false }
)
export default {
  async setup() {
    const store = useMainStore()
    const createSnackbar = useSnackbar()
    const theresult = await useApi().get('/company/gettashkilat')
    const tashkilatorder = []
    const tableheader =
      [
        {
          title: 'کد',
          align: 'center',
          key: 'id',
          width: '10%'
        },
        {
          title: 'تاریخ ابلاغ',
          align: 'center',
          key: 'name'
        },
        {
          title: 'تاریخ پایان',
          align: 'center',
          key: 'level'
        },
        {
          title: 'عملیات',
          align: 'center',
          key: 'actions',
          sortable: false
        }
      ]
    return { createSnackbar, store, tableheader, theresult, tashkilatorder }
  },
  components: {
    draggable,
  },
  created() {
    this.tashkilatitem = JSON.parse(JSON.stringify(this.theresult.result))
  },
  mounted(){
    this.checkarray()
  },
  data() {
    return {
      createnew: false,
      tashkilatitem: [], searchtext: null,tashkilatselected:[{ id: 9999, name: 'موردی انتخاب نشده' }],
    }
  },
  methods: {
    addnewtashkilat() {
      this.createnew = true
    },
    makeitdraft() {
      this.createnew = false
    },
    checkarray() {
      debugger
      if (this.tashkilatselected.length > 0) {
        var tindex = this.tashkilatselected.findIndex(element => element.id == -1)
     var tmp = this.tashkilatselected.splice(tindex, 1)
       this.tashkilatselected = tmp
      } else if (this.tashkilatselected.length == 0) {
        this.tashkilatselected[0] = { id: -1, name: 'موردی انتخاب نشده' }
      }
    }
  },

}
</script>


<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="8" md="5">
        <v-btn @click="addnewtashkilat" :disabled="createnew == true" rounded="lg" size="small" color="primary">
          <v-icon class="ml-1">mdi-plus-circle-outline</v-icon>
          تعریف سطح تشکیلات سازمانی
        </v-btn>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" md="8">
        <v-card v-if="createnew == true" class="mt-4">
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <v-card>
                  <v-card-title class="bg-card-title-bg elevation-2">
                    تشکیلات شما
                  </v-card-title>
                  <v-card-text class="pa-0">
                    <v-no-ssr>
                      <v-list class="pb-0" variant="text" height="400" bg-color="transparent">
                        <draggable v-model="tashkilatitem" group="tashkil" item-key="id">
                          <template #item="{ element }" >
                            <v-list-item bg-color="transparent" variant='elevated' class="mt-1">
                              <template v-slot:title>
                                <span class="text-body-1 ">{{ element.name }}</span>
                              </template>
                              <template v-slot:append>
                                <v-icon color="icon-primary-color" size="22">mdi-drag-variant</v-icon>
                                <v-icon color="icon-primary-color" size="22">mdi-arrow-left-bold-circle-outline</v-icon>
                              </template>
                            </v-list-item>
                          </template>
                        </draggable>
                      </v-list>
                    </v-no-ssr>
                  </v-card-text>
                </v-card>

              </v-col>
              <v-col cols="12" md="6">
                <v-card>
                  <v-card-title class="bg-card-title-bg  elevation-2">
                    تشکیلات انتخاب شده
                  </v-card-title>
                  <v-card-text class="pa-0">
                    <v-no-ssr>
                      <v-list height="400" class="pb-0" variant="text" bg-color="transparent">

                        <draggable v-model="tashkilatselected" group="tashkil" item-key="id">
                          <template #item="{ element }" >
                            <v-list-item bg-color="transparent" variant='elevated' class="mt-1">
                              <template v-slot:title>
                                <span class="text-body-1 ">{{ element.name }}</span>
                              </template>
                              <template v-slot:append v-if="element.id != 9999">
                                <v-icon color="icon-primary-color" size="22">mdi-drag-variant</v-icon>
                                <v-icon color="icon-delete-color" size="22">mdi-close-circle-outline</v-icon>
                              </template>
                            </v-list-item>
                          </template>
                        </draggable>
                      </v-list>
                    </v-no-ssr>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-row no-gutters justify="end">
              <v-col class="text-left" cols="12">
                <v-btn :loading="store.theloader" color="tertiary" @click="makeitdraft">
                  پیش نویس
                </v-btn>
                <v-btn variant="tonal" :loading="store.theloader" color="primary" @click="eblaghoejra">
                  ابلاغ و اجرا
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>

        <v-card color="transparent" class="elevation-0" v-if="createnew == false">
          <v-card-text class="pr-0">
            <v-data-table-virtual :class="{ 'hideit': tashkilatitem.length == 0 }" fixed-header class="elevation-1"
              height="400" :headers="tableheader" :items="tashkilatitem" :search="searchtext">
              <template v-slot:no-data>
                <v-alert position="relative" style="width: calc(141vh + 1%)" border="start"
                  border-color="primary-darken-1" type="info" text="موردی برای نمایش وجود ندارد!" variant="tonal">

                </v-alert>
              </template>
              <template v-slot:top>
                <v-toolbar color="card-title-bg" class="nobottomborder" style="z-index:7" elevation="3" rounded
                  density="compact">
                  <v-col cols="6">
                    <v-toolbar-title class="pa-3">لیست تشکیلات</v-toolbar-title>
                  </v-col>
                  <v-divider class="mx-1" inset vertical></v-divider>
                  <v-col cols="6" class="pr-0 pl-4">
                    <v-text-field v-model="searchtext" single-line variant="underline" hide-details density="compact">
                      <template v-slot:label>
                        <span class="text-on-surface">جستجوی عنوان</span>
                      </template>
                      <template v-slot:append>
                        <v-icon color="on-surface">mdi-magnify</v-icon>
                      </template>
                    </v-text-field>
                  </v-col>
                </v-toolbar>
              </template>
              <template v-slot:item.actions="{ item }">
                <v-icon size="small" color="icon-edit-color" class="me-2">
                  mdi-pencil
                </v-icon>
                <v-icon size="small" color="icon-delete-color">
                  mdi-delete
                </v-icon>
              </template>
            </v-data-table-virtual>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
:deep(.hideit .v-table__wrapper) {
  overflow: hidden !important
}

:deep(.v-list-item__append > .v-icon) {
  opacity: 1 !important;
}
</style>