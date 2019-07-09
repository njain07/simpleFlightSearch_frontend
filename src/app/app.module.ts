import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';

import 'zone.js/dist/zone-error'; //comment out for production mode

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    //Validators,
    //FormBuilder
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
