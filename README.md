# ElixirDashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Features
Elixirs are displayed as cards.
Each card contains information about Elixir name, ingredients, side effects and effects.
It is possible to go to Elixir details page from the card.
Users can search for Elixirs by name, with the search performed on the server side.
Latest version of Angular 16 is used.
NgRx Store is implemented for loading elixir data.
UI library Angular material is used to implement cards and icons.

## Known Issues

Since the search elixir by name is performed on the server side the exact case should be provided for the search term.           
Styling requires more attention and is WiP.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
