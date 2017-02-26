import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { LoginComponent }  from './login/login.component';
import { RegistrationComponent }  from './registration/registration.component';

@NgModule({
  imports:      [ BrowserModule , FormsModule, HttpModule, 
  RouterModule.forRoot([
  {
    path: 'login',
    component: LoginComponent
  }
])],
  declarations: [ AppComponent , LoginComponent RegistrationComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
