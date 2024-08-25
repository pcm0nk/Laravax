import { defineStore } from 'pinia'
export const useMainStore = defineStore('mainstore', () => {

     const theloader = ref(false)

    const numberregex = computed(() => [
      v => v != '' && v != null || 'This field is required',
      v =>  /^[0-9]+$/.test(v)  || 'Only numbers are allowed'
    ])

    const emailregex = computed(() => [
      v => v != '' && v != null || 'This field is required',
      v => /.+@.+\..+/.test(v) || 'Enter a valid email',
    ])


    return { numberregex,emailregex }
  })

