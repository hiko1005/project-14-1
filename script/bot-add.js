import {createApp, ref, watch} from "vue"

const app = createApp({
    data() {
        return {
            label: ref(''),
            type_noti: ref(''),
            token: ref(''),
            message_pat: ref(''),
            active: ref(true),
            contact: ref(''),
            login: ref(''),
            password: ref(''),
            headers: ref(''),
            api_url: ref(''),
            request_type: ref(''),
            body_pat: ref('')
        }
    },
    methods: {
        submitForm() {
            let result = true
            result = result && this.label!=null && this.label!=' ' && this.label.length>=3
            if(this.type_noti.value == "Telegram" && this.token)
            result = result && this.token!=' '
            if(this.type_noti.value == "Telegram" || this.type_noti.value == "e-mail")
            result = result && this.message_pat!=null && this.message_pat.length <= 255
            if(this.type_noti.value == "e-mail" || this.type_noti.value == "custom" && this.login && this.password) {
                result = result && this.login!=' ' && this.login.length >= 3
                result = result && this.password!=' ' && this.password.length >= 6
            }
            if(this.type_noti.value == "custom" && this.headers) {
                result = result && this.headers!=' ' && this.headers.length <= 255
                if(this.api_url.match(/(?:https?:\/\/)?(?:[\w\.]+)\.(?:[a-z]{2,6}\.?)(?:\/[\w\.]*)*\/?/))
                result = result
            }
            if(this.request_type.value == "POST" && this.body_pat)
            result = result && this.body_pat!=' ' && this.body_pat.length <= 255

            if(result == false)
            alert('Try again, you wrote something wrong')
            else {
                location.reload()
            }
        }
    }
})

app.mount("#app")