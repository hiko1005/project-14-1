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
            let result = true
            result = result && this.label!=null && this.label!=' ' && this.label.length>3
            if(!this.site_url.match(/(?:https?:\/\/)?(?:[\w\.]+)\.(?:[a-z]{2,6}\.?)(?:\/[\w\.]*)*\/?/))
            result = false
            result = result && this.description!=null && this.description.length <= 255 && this.description!=' '
            if(!this.expected_code.match(/([0-5][0-9][0-9]){1,}/))
            result = false
            result = result && this.cron_shedule!=null && this.cron_shedule!=' ' && this.cron_shedule.length >=9
            result = result && this.select_bot!=null

            if(!result)
            alert('Try again, you wrote something wrong')
            else {
                location.reload()
            }
        }
    }
})

app.mount('#app')