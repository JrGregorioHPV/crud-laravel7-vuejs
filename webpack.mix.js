const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles([
  'resources/css/bootstrap.min.css',
  'resources/css/toastr.css',
], 'public/css/app.css');

mix.scripts([
  'resources/js/jquery-3.3.1.min.js',
  'resources/js/bootstrap.min.js',
  'resources/js/toastr.js',
  'resources/js/vue.js',
  'resources/js/axios.js',
  'resources/js/app.js',
], 'public/js/app.js');
