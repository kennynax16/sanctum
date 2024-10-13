import { createApp } from 'vue';
import App from './components/App.vue'; // Ваш основной компонент
import router from './router'; // Импортируйте маршрутизатор

// Импорт Vuetify
import { createVuetify } from 'vuetify';
import 'vuetify/styles';  // Импорт стилей Vuetify
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Создание экземпляра Vuetify
const vuetify = createVuetify({
    components,
    directives,
});

// Создание Vue-приложения
const app = createApp(App);

// Используйте маршрутизатор
app.use(router);

// Добавляем Vuetify в приложение
app.use(vuetify);

// Монтируем приложение
app.mount('#app');

