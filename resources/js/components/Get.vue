<template>
    <div class="ma-10">
        <h1>get11</h1>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Get",

    mounted() {

       this.getData()
    },

    methods:{

        getData(){
            axios.get('/api/get')
                .then(r => {
                    console.log(r);
                })
        }
    }
}
</script>

<style scoped>

</style>
