# ShopsWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Description

Front-end wep app for united remote coding challenge.

## Features of the app

The user of the application can :

- Sing up and Sign in use his email and password.
- Display list of shops stored by distance if he provide his location (give the permission of location in the browser).
- Like a shop, so it can be added to his preferred shops list, and it won't be display in the main list.
- Display his list of preferred shops.
- Remove a shop from his preferred shops list.
- Dislike a shop, so it won't be display in the main list within the next two hours.

## The structure of the application

This app build with angular 7, and consume a rest api build with spring-boot.

This app composed of two modules, every composed of his components, services, models and pipes.

### auth module :

This module handle the authentication and register logic:<br/>
- components :login, register, logout.
- models :user, registerDto. 
- services : 
  - auth.service : for make calls to the rest api.
  - auth-guard.service : for block users to access the shops module (list of shops) if they are not authenticated.
  - auth-http-interceptor.service : for intercept and modify http requests by adding the authorisation header with token of the user. 

We have also another component (auth.component) that present the main component of this module, also an module for routing (auth-routing.module).

### shops module :

This module will be in charge the display shops:
- components: nearby-shops-list, preferred-shop-list.
- models: location, shop.
- services : 
  - shop.service: make calls to the api to get list of shops sorted by distance, like a shop, dislike a shop ...
  - location.service : get the current location of the user based on his browser location.
- pipes : 
  - no-comma.pipe: a pipe for delete a comma in number (1,234 ==> 1234).
 
We have also another component (shops.component) that present the main component of this module, also an module for routing(shops-routing.module).

### styles :
We use css and bootstrap 4.

### Libraries:
angular-jwt : for handling JSON Web Token standard in angular2+ apps.
