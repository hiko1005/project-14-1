import {createApp, ref, watch} from "vue"

const app = createApp({
    data() {
        return {
            label: ref(''),
            contact: ref(''),
            active: ref(true)
        }
    },
    methods: {
        submitForm() {
            let result = true
            result = result && this.label!=null && this.label!=' ' && 3 <= this.label <= 16
            result = result && this.contact!=null && this.contact!=' ' && this.contact.lenght <= 255

            if(result == false)
            alert('Try again, you`re wrote something wrong')
            else {
                location.reload()
            }
        }
    }
})

app.mount("#app")