import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'angular2-select';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { InputFormComponent } from './input-form.component';


platformBrowserDynamic() 
    .bootstrapModule(AppModule);
