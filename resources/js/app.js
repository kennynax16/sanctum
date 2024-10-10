import { createApp } from 'vue'

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router'; // Импортируйте ваш маршрутизатор

// Components
import App from './components/App.vue'

// Создание экземпляра Vuetify
const vuetify = createVuetify({
    components,
    directives
})

// Создание приложения Vue
const app = createApp(App)

// Использование маршрутизатора и Vuetify
app.use(router)
app.use(vuetify)

// Монтирование приложения
app.mount('#app')
