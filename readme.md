## Laravel PHP Framework

[![Build Status](https://travis-ci.org/laravel/framework.svg)](https://travis-ci.org/laravel/framework)
[![Total Downloads](https://poser.pugx.org/laravel/framework/d/total.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Stable Version](https://poser.pugx.org/laravel/framework/v/stable.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Unstable Version](https://poser.pugx.org/laravel/framework/v/unstable.svg)](https://packagist.org/packages/laravel/framework)
[![License](https://poser.pugx.org/laravel/framework/license.svg)](https://packagist.org/packages/laravel/framework)

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable, creative experience to be truly fulfilling. Laravel attempts to take the pain out of development by easing common tasks used in the majority of web projects, such as authentication, routing, sessions, queueing, and caching.

Laravel is accessible, yet powerful, providing powerful tools needed for large, robust applications. A superb inversion of control container, expressive migration system, and tightly integrated unit testing support give you the tools you need to build any application with which you are tasked.

## Official Documentation

Documentation for the framework can be found on the [Laravel website](http://laravel.com/docs).

## NOTE:
1. Don't run serve because public/index.php file moved. Config webserver to root project, not to root/public
2. Data import file ……SQL, not run migarte and seed.
3. You only can run composer install after done step 2.
4. create folder:
    - storage/framework/views
    - public/upload/member
5. Set permission for folders: chmod -R 777 bootstrap/cache/ storage/ adv/ public/upload/member resources/lang
6. To use Contact Us function you must config RE_CAP_SITE and RE_CAP_SECRET value in .env file:
You can go to https://www.google.com/recaptcha to create them
RE_CAP_SITE=6Lez1RMTAAAAAEVQAim3lzPlkwxeV9s8zqh7cvvS
RE_CAP_SECRET=6Lez1RMTAAAAAGZvOPtTsrFmw7ps75P25sSj8s7Q

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](http://laravel.com/docs/contributions).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell at taylor@laravel.com. All security vulnerabilities will be promptly addressed.

### License

The Laravel framework is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)


###Upgrade from v2 to v3
*table_video: update column
- preview: change vachar to text
*table_config: add collumn
- site_theme :  varchar(50), null: no, default: none
- site_google_verification_code : varchar(255), null: yes, default: null
- site_channel_logo :   varchar(300), null: no, default: none
*table_tag: create new table
*run command: php artisan video:convertPreview