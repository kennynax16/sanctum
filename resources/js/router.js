// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import axios from 'axios'; // Добавьте этот импорт в начале файла


// Импортируйте ваши компоненты
const routes = [
    {
        path: '/',
        component: () => import('./components/App.vue'),
        name: 'app',
    },
    {
        path: '/get',
        component: () => import('./components/Get.vue'),
        name: 'get',
    },
    {
        path: '/login',
        component: () => import('./components/Login.vue'),
        name: 'login',
    },
    {
        path: '/register',
        component: () => import('./components/Register.vue'),
        name: 'register',
    },
    {
        path: '/personal',
        component: () => import('./components/Personal.vue'),
        name: 'personal',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

// Функция перед каждым роутом
router.beforeEach((to, from, next) => {
    axios.get('/api/user') // Запрос на проверку аутентификации
        .then(response => {
            const isAuthenticated = response.data; // Если есть данные, значит пользователь авторизован

            if (!isAuthenticated) {
                // Если пользователь не авторизован и пытается попасть на защищенную страницу
                if (to.name !== 'login' && to.name !== 'register') {
                    return next({ name: 'login' });
                } else {
                    return next();
                }
            }

            // Если пользователь авторизован и пытается попасть на страницы логина или регистрации
            if (to.name === 'login' || to.name === 'register') {
                return next({ name: 'personal' });
            }

            next(); // Если пользователь авторизован и идет на разрешенные страницы
        })
        .catch(() => {
            // Если произошла ошибка или пользователь не залогинен
            if (to.name !== 'login' && to.name !== 'register') {
                return next({ name: 'login' });
            }
            next();
        });
});


export default router;
