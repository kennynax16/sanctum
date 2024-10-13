<template>
    <v-container>
        <v-form  class="mt-16" lazy-validation>
            <v-text-field

                v-model="email"
                label="Email"
                required
            ></v-text-field>

            <v-text-field
                v-model="password"
                label="Password"
                type="password"
                required
            ></v-text-field>

            <v-btn
                @click.prevent="login"
                color="primary"

            >
                Login
            </v-btn>
        </v-form>
    </v-container>
</template>

<script>
import axios from "axios";

export default {
    name: "Login",

    data(){
        return {
            email: '',
            password: '',
            user: null, // Данные пользователя
            isAuthenticated: false // Флаг аутентификации

        }
    },



    methods:{

        login(){

            const data = {
                email : this.email,
                password : this.password
            }

            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/login',data)
                    .then(res =>{
                        this.GetUser(); // Вызывайте GetUser, чтобы обновить состояние пользователя

                        this.$router.push({name: 'personal'});

                    })
            });

        },

        GetUser(){
            // Запрос информации о пользователе
            axios.get('/api/user')
                .then(response => {
                    this.user = response.data;
                    console.log(response.data)
                    this.isAuthenticated = true; // Установите флаг аутентификации
                })
                .catch(() => {
                    this.isAuthenticated = false; // Пользователь не авторизован
                });
        },
    }
}
</script>

<style scoped>

</style>
