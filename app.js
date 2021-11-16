const app = Vue.createApp({
    
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            gender: '',
            picture: 'https://i.pinimg.com/564x/b6/90/8e/b6908ed423f52a850037c216d38dd232.jpg',
            totalUsers: 0,
            isEmpty: true
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api/?results=1');
            const {results} = await res.json();
            this.firstName = results[0].name.first;
            this.lastName = results[0].name.last;
            this.picture = results[0].picture.medium;
            this.email = results[0].email;
            this.gender = results[0].gender;

            this.totalUsers ++;
            this.isEmpty = false;
        },
        isClicked(){
            return this.isClicked;
        }

    }
})

app.mount('#app');