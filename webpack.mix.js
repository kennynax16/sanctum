const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .vue() // добавьте эту строку для поддержки Vue
    .sass('resources/sass/app.scss', 'public/css')
    .version();
