# TaskBoard API — file drop-in guide

These files are meant to be copied into a project created with:

    composer create-project laravel/laravel taskboard-api
    cd taskboard-api
    php artisan install:api

Copy each file here into the matching path in your project (overwriting
`app/Models/User.php`, `routes/api.php`, and `config/cors.php`).

Add to your `.env`:

    DB_CONNECTION=mysql
    DB_DATABASE=taskboard
    DB_USERNAME=root
    DB_PASSWORD=
    FRONTEND_URL=http://localhost:5173

Then:

    php artisan migrate
    php artisan config:clear
    php artisan serve
