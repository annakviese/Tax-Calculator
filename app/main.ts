import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ReactiveFormsModule } from '@angular/forms';
import {SelectModule} from 'angular2-select';
import { AppComponent } from './app.component';
import { ProvincesComponent } from './provinces.component';


@NgModule ({
    declarations: [ AppComponent, ProvincesComponent ],
    imports: [ BrowserModule, ReactiveFormsModule,
        SelectModule],
    bootstrap: [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic() 
    .bootstrapModule(AppModule);
