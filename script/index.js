import {createApp, ref, watch} from "vue"

const app = createApp({
    data() {
        return {
            label: ref(''),
            site_url: ref(''),
            description: ref(''),
            expected_code: ref(''),
            expected_code_pattern: ref(''),
            check_active: ref('true'),
            inversive_condition: ref('true'),
            cron_shedule: ref('* * * * *'),
            select_bot: ref('')
        }
    },
    methods: {
        submitForm() {
             
        }
    }
})

app.mount('#app')