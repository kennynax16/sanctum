<template>
    <v-container>
        <v-form >
            <v-text-field
                v-model="name"
                label="Имя"
                required
            ></v-text-field>

            <v-text-field
                v-model="email"
                label="Электронная почта"
                required
            ></v-text-field>

            <v-text-field
                v-model="password"
                label="Пароль"
                type="password"
                required
            ></v-text-field>

            <v-text-field
                v-model="password_confirmation"
                label="Подтвердите пароль"
                type="password"
                required
            ></v-text-field>

            <v-btn @click.prevent="register">Зарегистрироваться</v-btn>
        </v-form>
    </v-container>
</template>

<script>
import axios from "axios";

export default {
    name: "Register",

    data(){
        return {

            name:'',
            email:'',
            password:'',
            password_confirmation:''
        }
    },

    methods:{
        register(){

            const data = { name : this.name,
                email : this.email,}





            axios.get('/sanctum/csrf-cookie').then(response => {

                axios.post('/register',data)
                    .then(res=>{

                        this.$router.push({name: 'personal'});
                    })
            });

        }
    }
}
</script>

<style scoped>

</style>
