import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { Navbar } from './navigation/navbar';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'logout',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegistrationComponent
      }
    ])],
  declarations: [AppComponent, LoginComponent, RegistrationComponent, Navbar],
  bootstrap: [AppComponent]
})
export class AppModule { }
