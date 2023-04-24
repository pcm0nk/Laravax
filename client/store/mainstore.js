import { defineStore } from 'pinia'
export const useMainStore = defineStore('mainstore', () => {

     const count = ref(0)
     const theloader = ref(false)
    const doubleCount = computed(() => count.value * 2)

    const numberregex = computed(() => [
      v => v != '' && v != null || ' این فیلد الزامی است',
      v =>  /^[0-9|\u06F0-\u06F9|\u0660-\u0669]+$/.test(v)  || 'تنها عدد مجاز است'
    ])

    const persianregex = computed(() => [
      v => v != '' && v != null || ' این فیلد الزامی است',
      v => 
      /^[\u0621-\u064A-\u0020\u2000-\u200F\u2028-\u202F-\u202C\u064B\u064C\u064E-\u0652\u0622\u0627\u0628\u067E\u062A-\u062C\u0686\u062D-\u0632\u0698\u0633-\u063A\u0641\u0642\u06A9\u06AF\u0644-\u0648\u06CC\u0626]+$/
      .test(v) || 'تنها حروف فارسی مجاز است'
    ])
    
    function increment() {
      count.value++
    }
  
    return { numberregex,persianregex,count, doubleCount, increment }
  })
// export const useMainStore = defineStore('mainstore', {
//   // arrow function recommended for full type inference
//   state: () => {
//     return {
//         globalloader:false,days:[],years:[],months:[],                 
//         englishregex: /^[a-zA-Z-()/\0-9 ]+$/,
//         numberregex: /^[0-9|\u06F0-\u06F9|\u0660-\u0669]+$/,
//         alltext:/^[a-zA-Z()/-/\,:@'%،..+#$!0-9 \u06F0-\u06F9-\u0621-\u064A-\u0020\u2000-\u200F\u2028-\u202F-\u202C\u064B\u064C\u064E-\u0652\u0622\u0627\u0628\u067E\u062A-\u062C\u0686\u062D-\u0632\u0698\u0633-\u063A\u0641\u0642\u06A9\u06AF\u0644-\u0648\u06CC\u0626 \u003a]+$/,
//         persianregexwithextra:   /^[()/-//,@%':،..+#$!0-9-\u06F0-\u06F9-\u0621-\u064A-\u0020\u2000-\u200F\u2028-\u202F-\u202C\u064B\u064C\u064E-\u0652\u0622\u0627\u0628\u067E\u062A-\u062C\u0686\u062D-\u0632\u0698\u0633-\u063A\u0641\u0642\u06A9\u06AF\u0644-\u0648\u06CC\u0626 \u003a]+$/,
//         persianregex:   /^[\u0621-\u064A-\u0020\u2000-\u200F\u2028-\u202F-\u202C\u064B\u064C\u064E-\u0652\u0622\u0627\u0628\u067E\u062A-\u062C\u0686\u062D-\u0632\u0698\u0633-\u063A\u0641\u0642\u06A9\u06AF\u0644-\u0648\u06CC\u0626]+$/,
//         persianregexandeng:   /^[a-zA-Z()@%/-//,:'،..+#$!0-9-\u06F0-\u06F9-\u0621-\u064A-\u0020\u2000-\u200F\u2028-\u202F-\u202C\u064B\u064C\u064E-\u0652\u0622\u0627\u0628\u067E\u062A-\u062C\u0686\u062D-\u0632\u0698\u0633-\u063A\u0641\u0642\u06A9\u06AF\u0644-\u0648\u06CC\u0626 \u003a]+$/,
//         persianregexwithnumber:   /^[,:،.@%'.+#$!0-9-\u06F0-\u06F9-\u0621-\u064A-\u000A\u000D\u00a0\u240A\u240D\u2424\u23CE\u2e\u0020\u2000-\u200F\u2028-\u202F-\u202C\u064B\u064C\u064E-\u0652\u0622\u0627\u0628\u067E\u062A-\u062C\u0686\u062D-\u0632\u0698\u0633-\u063A\u0641\u0642\u06A9\u06AF\u0644-\u0648\u06CC \u003a]+$/,
//         persiandefaultrules: [
//         v => v != '' && v != null || ' این فیلد الزامی است',
//         v => 
//         /^[\u0621-\u064A-\u0020\u2000-\u200F\u2028-\u202F-\u202C\u064B\u064C\u064E-\u0652\u0622\u0627\u0628\u067E\u062A-\u062C\u0686\u062D-\u0632\u0698\u0633-\u063A\u0641\u0642\u06A9\u06AF\u0644-\u0648\u06CC]+$/
//         .test(v)
//         ],
//         companynameRules: [
//         v => v !== '' && v !== null  || ' نام الزامی است',
//         v => (v && v.length >=3 && v.length <= 50) || 'کمترین کاراکتر 3 و بیشترین 50 می باشد',
//         v => 
//         /^[\u0621-\u064A-\u0020\u2000-\u200F\u2028-\u202F-\u202C\u064B\u064C\u064E-\u0652\u0622\u0627\u0628\u067E\u062A-\u062C\u0686\u062D-\u0632\u0698\u0633-\u063A\u0641\u0642\u06A9\u06AF\u0644-\u0648\u06CC]+$/
//         .test(v) === true || 'تنها حروف فارسی و فاصله مجاز است'
//         ],
//         engnameRules:[
//         v => v !== '' && v !== null  || 'Name is required',
//         v => (v && v.length <= 40) || 'Must be less than or 40 characters' ,
//         v => /^[a-zA-Z،',-/\[]()@% ]+$/.test(v) === true || 'Only a-z and A-Z and space are allowed'
//         ],
//         website:[
//         v => v !== '' && v !== null  || 'Name is required',
//         v => (v && v.length <= 35) || 'Must be less than or 35 characters' ,
//         v => /^[a-zA-Z0-9.,، ]+$/.test(v) === true || 'Only a-z and A-Z and dot are allowed'
//         ],
//         lastnameRules: [
//         v => v !== '' && v !== null  || ' نام خانوادگی الزامی است',
//         v => (v && v.length <= 40) || 'نام می بایست کمتر از 40 کاراکتر باشد.',
//         v => (v !== '' && v !== null) &&
//         /^[\u0621-\u064A-\u0020\u2000-\u200F\u2028-\u202F-\u202C\u064B\u064C\u064E-\u0652\u0622\u0627\u0628\u067E\u062A-\u062C\u0686\u062D-\u0632\u0698\u0633-\u063A\u0641\u0642\u06A9\u06AF\u0644-\u0648\u06CC]+$/
//         .test(v) === true || 'تنها حروف فارسی و فاصله مجاز است'
//         ],
        
//     }
//   },
// })
