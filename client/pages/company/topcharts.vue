<script>
import { useSnackbar } from '~/composables/useSnackbar'
import { useMainStore } from '@/store/mainstore'
export default {
    async setup() {

        definePageMeta({
            middleware: 'auth'
        })
        const createSnackbar = useSnackbar()
        const store = useMainStore()
        const theresut = await useApi().get('/company/gettashkilat')
        const tableheader =
            [
                {
                    title: 'کد',
                    align: 'center',
                    key: 'id'
                },
                {
                    title: 'عنوان تشکیلات',
                    align: 'center',
                    key: 'name'
                },
                {
                    title: 'سطح تشکیلات',
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

        return { tableheader, theresut, createSnackbar, store }
    },
    created() {
        this.tashkilatitem = this.theresut.result
    },
    data() {
        return {
            searchtext: null, thedialog: false, vform: false, tashkilatname: null, tashkilatlevel: null,
            editindex: null, tashkilatitem: [], dialogmode: 'tashkilat', dialogmsg: '', dialogfunc: null, deleteindex: null
        }
    },
    methods: {
        calldialogfunc() {
            this[this.dialogfunc]()
        },
        async initiatedelete() {
            this.store.theloader = true
            const tashkilatupdate = await useApi().delete('/company/deletetashkilat', {
                item: this.tashkilatitem[this.deleteindex].id
            })
            if (tashkilatupdate.status == 'Fine') {
                this.tashkilatitem.splice(this.deleteindex, 1)
                this.createSnackbar('مورد حذف شد', { snackbarcolor: 'success' })
                this.deleteindex = null
                this.thedialog = false
                setTimeout(() => { this.store.theloader = false }, 1000)


            } else {
                this.createSnackbar('خطا هنگام حذف', { snackbarcolor: 'error' })
                setTimeout(() => { this.store.theloader = false }, 1000)


            }
        },
        addnewtashkilat() {
            this.dialogmode = 'tashkilat'
            this.thedialog = true
        },

        async edittashkilat(item) {
            debugger
            this.dialogmode = 'tashkilat'
            this.editindex = this.tashkilatitem.findIndex(itemorg => itemorg.id == item.raw.id);
            this.tashkilatname = item.raw.name
            this.tashkilatlevel = item.raw.level
            this.thedialog = true
        },
        deletetashkilat(item) {
            this.dialogmode = 'delete'
            this.dialogmsg = "از حذف <span class='text-error'>" + item.raw.name + "</span> اطمینان دارید ؟"
            this.dialogfunc = 'initiatedelete'
            this.deleteindex = this.tashkilatitem.findIndex(itemorg => itemorg.id == item.raw.id)
            this.thedialog = true
        },
        async submitedit() {
            debugger
            if (this.tashkilatname != null && this.tashkilatname != '') {
                this.store.theloader = true
                this.tashkilatitem[this.editindex]['name'] = await this.tashkilatname
                const tashkilatupdate = await useApi().update('/company/updatetashkilat', {
                    item: this.tashkilatitem[this.editindex]
                })

                if (tashkilatupdate.status == 'Fine') {
                    this.createSnackbar('بروز رسانی شد', { snackbarcolor: 'success' })
                    this.thedialog = false
                    setTimeout(() => { this.store.theloader = false }, 1000)


                } else {
                    this.createSnackbar('خطا در ذخیره سازی', { snackbarcolor: 'error' })
                    setTimeout(() => { this.store.theloader = false }, 1000)


                }
            }
        },
        // A method that is called when the user clicks on the save button.
        async savetashkilat(type) {
            this.store.theloader = true
            debugger
            const { valid } = await this.$refs.theform.validate()
            if (valid) {
                const added = await useApi().store('/company/savetashkilat',
                    {
                        name: this.tashkilatname,
                        level: this.tashkilatlevel
                    })
                console.log(added)
                if (added.status == 'Fine') {
                    this.createSnackbar('اضافه شد', { snackbarcolor: 'success' })
                    this.tashkilatitem.push({
                        id: this.tashkilatitem.length + 1,
                        name: this.tashkilatname,
                        level: this.tashkilatlevel
                    })
                    this.$refs.theform.reset()
                    this.$refs.theform.resetValidation()
                    if (type == 'close') {
                        this.thedialog = false
                    }
                    setTimeout(() => { this.store.theloader = false }, 1000)

                } else if (added.status == 'DuplicateName') {
                    this.createSnackbar('این تشکیلات از قبل اضافه شده', { snackbarcolor: 'error', timeout: '2500' })
                    setTimeout(() => { this.store.theloader = false }, 1000)

                } else if (added.status == 'DuplicateLevel') {
                    this.createSnackbar('این سطح از قبل اضافه شده', { snackbarcolor: 'error', timeout: '2500' })
                    setTimeout(() => { this.store.theloader = false }, 1000)

                } else {
                    this.createSnackbar('خطا در ذخیره سازی', { snackbarcolor: 'error' })
                    setTimeout(() => { this.store.theloader = false }, 1000)

                }
            }
        },
    },
    watch: {
        thedialog(newval, oldval) {
            if (newval == false && oldval == true && this.dialogmode == 'tashkilat') {
                this.$refs.theform.reset()
                this.editindex = null
                this.$refs.theform.resetValidation()

            }
        }
    }
}
</script>

<template>
    <v-container fluid>
        <v-row>
            <v-col  cols="12" sm="8" md="5">
                <v-btn @click="addnewtashkilat" rounded="lg" size="small" color="primary">
                    <v-icon class="ml-1">mdi-plus-circle-outline</v-icon>
                    تعریف تشکیلات سازمانی
                </v-btn>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="12" md="12">
                <v-card color="transparent" class="elevation-0">
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" sm="8" md="7" class="px-0">
                                <v-data-table-virtual class="elevation-1" height="400" :headers="tableheader"
                                    :items="tashkilatitem" :search="searchtext"  fixed-header
                                    no-data-text="اولین تشکیلات خود را وارد کنید...">
                                    <template v-slot:no-data>
                    <v-alert position="relative" style="width: calc(141vh + 1%)" border="start"
                      border-color="primary-darken-1" type="info" text="موردی برای نمایش وجود ندارد!" variant="tonal">

                    </v-alert>
                  </template>
                                    <template v-slot:top>
                                        <v-toolbar color="card-title-bg" class="nobottomborder" style="z-index:7" elevation="3" density="compact">
                                            <v-col cols="6">
                                                <v-toolbar-title class="pa-3">لیست تشکیلات</v-toolbar-title>
                                            </v-col>
                                            <v-divider class="mx-1" inset vertical></v-divider>
                                            <v-col cols="6" class="pr-0 pl-4">
                                                <v-text-field v-model="searchtext" single-line variant="underline"
                                                    hide-details density="compact">
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
                                        <v-icon size="small" color="icon-edit-color" class="me-2" @click="edittashkilat(item)">
                                            mdi-pencil
                                        </v-icon>
                                        <v-icon size="small" color="icon-delete-color" @click="deletetashkilat(item)">
                                            mdi-delete
                                        </v-icon>
                                    </template>
                                </v-data-table-virtual>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-dialog transition="dialog-top-transition" v-model="thedialog" persistent max-width="480">
            <v-card v-if="dialogmode == 'tashkilat'">
                <v-card-title class="bg-card-title-bg elevation-3">
                    <p class="text-h6">
                        <v-icon class="ml-2" v-if="editindex == null">mdi-plus-circle-multiple-outline</v-icon>
                        <span v-if="editindex == null">تشکیلات جدید</span>

                        <v-icon class="ml-2" v-if="editindex != null">mdi-pencil-circle-outline</v-icon>
                        <span v-if="editindex != null">ویرایش تشکیلات</span>
                    </p>
                </v-card-title>
                <v-card-text>
                    <v-col cols="12" class="pa-0">
                        <v-form model-value="vform" ref="theform">
                            <v-row>
                                <v-col cols="12" md="6" sm="6">
                                    <v-text-field :rules="store.persianregex" label="عنوان تشکیلات" color="primary" required
                                        v-model="tashkilatname">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" sm="5">
                                    <v-text-field :disabled="editindex != null" :rules="store.numberregex"
                                        label="سطح تشکیلات" color="primary" v-model="tashkilatlevel" required>
                                    </v-text-field>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-col>
                </v-card-text>
                <v-card-actions>
                    <v-row no-gutters justify="end">
                        <v-col class="text-left" cols="12">
                            <v-btn :loading="store.theloader" color="tertiary" @click="thedialog = false">
                                لغو
                            </v-btn>
                            <v-btn v-if="editindex == null" variant="tonal" :loading="store.theloader" color="primary"
                                @click="savetashkilat('remain')">
                                ذخیره
                            </v-btn>
                            <v-btn v-if="editindex == null" variant="tonal" :loading="store.theloader" color="primary"
                                @click="savetashkilat('close')">
                                ذخیره و بستن
                            </v-btn>
                            <v-btn v-if="editindex != null" variant="tonal" :loading="store.theloader" color="primary"
                                @click="submitedit">
                                ویرایش
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-actions>
            </v-card>
            <v-card v-if="dialogmode == 'delete'">
                <v-card-title class="bg-error elevation-3">
                    <p class="text-h6">
                        <v-icon class="ml-2">mdi-delete-circle-outline</v-icon>
                        <span>حذف تشکیلات</span>
                    </p>
                </v-card-title>
                <v-card-text>
                    <p v-html="dialogmsg"></p>
                </v-card-text>
                <v-card-actions>
                    <v-row no-gutters justify="end">
                        <v-col class="text-left" cols="12">
                            <v-btn :loading="store.theloader" color="tertiary" @click="thedialog = false">
                                لغو
                            </v-btn>
                            <v-btn variant="tonal" :loading="store.theloader" color="error" @click="calldialogfunc">
                                حذف
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>
<style scoped>
:deep(.v-data-table-footer__pagination .v-btn .v-btn__content .mdi-chevron-left) {
    transform: rotate(180deg)
}

:deep(.v-data-table-footer__pagination .v-btn .v-btn__content .mdi-chevron-right) {
    transform: rotate(180deg)
}

:deep(.v-data-table-footer__pagination .v-btn .v-btn__content .mdi-page-first) {
    transform: rotate(180deg)
}

:deep(.v-data-table-footer__pagination .v-btn .v-btn__content .mdi-page-last) {
    transform: rotate(180deg)
}


</style>