# CustomLibrary

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## How to Create Library in Angular 

Step 1: Installing Angular CLI
    $ npm install -g @angular/cli

Step 2: Creating your Angular 9 Project
    $ ng new custom-library

Step 3: Create Library
    $ ng generate library my-lib

Step 4: Make a functionality into your library.
    Paste This code in my-lib.component.ts
  <form method="post">
   <div>
     <label for="uname"><b>UserName:</b></label>
     <input type="text" placeholder="Enter User Name" name="uname" required style="margin:10px;">
     <br/>
     <label for="pass"><b>Password:</b></label>
     <input type="password" placeholder="Enter Password" name="pass" required style="margin:10px;">
     <br/>
     <button type="submit">Login</button>
   </div>
  </form>

Step 5 : Build and consume Angular library.
    $ ng build my-lib

Step 6: Implement library into current project
    require the library in app.module.ts
    import { MyLibModule } from 'my-lib';
    
    @NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

Step 7:Call the Library Component in app.component.html 
    <p>Hello Sumit</p>
    <lib-my-lib></lib-my-lib>



  `
 




# custom-library
