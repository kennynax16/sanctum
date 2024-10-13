<template>
    <div class="ma-10">
        <h1>this is personal</h1>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Personal",



    mounted() {
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
    }


}
</script>

<style scoped>

</style>
