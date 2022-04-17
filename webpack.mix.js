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

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .styles([
        'resources/assets/css/fontawesome.css',
        'resources/assets/css/glightbox.min.css',
        'resources/assets/css/owl.carousel.min.css',
        'resources/assets/css/owl.theme.default.min.css',
        'resources/assets/css/plyr.css',
        'resources/assets/css/prism.css',
        'resources/assets/css/style.css',
    ], 'public/css/libs.css')
    .scripts([
        'resources/assets/js/bootstrap.bundle.min.js',
        'resources/assets/js/jquery-3.6.0.min.js',
        'resources/assets/js/glightbox.min.js',
        'resources/assets/js/chart.min.js',
        'resources/assets/js/owl.carousel.min.js',
        'resources/assets/js/plyr.js',
        'resources/assets/js/prism.js',
        'resources/assets/js/rating.js',
        'resources/assets/js/main.js',
    ], 'public/js/libs.js')
    .styles([
        'resources/assets/css/fontawesome.css',
        'resources/assets/css/datatables.min.css',
        'resources/assets/css/admin-style.css',
        'resources/assets/css/bootstrap-multiselect.min.css',
    ], 'public/css/admin-libs.css')
    .scripts([
        'resources/assets/js/jquery-3.6.0.min.js',
        'resources/assets/js/jquery.easing.1.3.js',
        'resources/assets/js/datatables.min.js',
        'resources/assets/js/bootstrap-multiselect.js',
        'resources/assets/js/admin-script.js',
    ], 'public/js/admin-libs.js')
    .sourceMaps();
    
    mix.copyDirectory('vendor/tinymce/tinymce', 'public/js/tinymce');
