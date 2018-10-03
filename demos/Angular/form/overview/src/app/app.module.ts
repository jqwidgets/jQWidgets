import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';

import { AppComponent } from './app.component';
import { jqxFormComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxform';

@NgModule({
    declarations: [
        AppComponent, jqxFormComponent
    ],
    imports: [
        BrowserModule, CommonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
