import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { jqxFormModule } from 'jqwidgets-ng/jqxform';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, jqxFormModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
