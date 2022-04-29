const app = new Vue(
    {
        el: '#app',
        data: {
            emailList: [],
            emailNumber: 10
        },
        methods: {},
        mounted() {
            for(i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(response => {
                    // console.log(this);
                    // console.log(response);
                    this.email = response.data.response
                    this.emailList.push(this.email)
            })
            }

        }
    }
)