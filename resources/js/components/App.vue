<template>
    <div>
        <router-link v-if="isAuthenticated" class="m-lg-5" :to="{name : 'get'}">Get</router-link>
        <router-link  v-if="!isAuthenticated"  class="ms-5" :to="{name : 'login'}">login</router-link>
        <router-link v-if="!isAuthenticated" class="ms-5" :to="{name : 'register'}">register</router-link>
        <router-link  v-if="isAuthenticated"  class="ms-5" :to="{name : 'personal'}">personal</router-link>
        <v-btn  v-if="isAuthenticated" @click.prevent="logout">
            Logout
        </v-btn>

        <router-view></router-view>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "App",


    data() {
        return {
            user: null, // Данные пользователя
            isAuthenticated: false // Флаг аутентификации
        };
    },


mounted() {
        this.GetUser()
},

    updated() {
        this.GetUser()
    },

    methods:{

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

        logout(){
            axios.post('/logout')
                .then(res=>{
                    this.user = null; // Очистить данные пользователя
                    this.isAuthenticated = false; // Установить флаг аутентификации в false
                    this.$router.push({name: 'login'});
                    console.log('Разлогинен')
                })
        }
    }
}
</script>

<style scoped>

</style>


