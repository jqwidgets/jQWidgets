import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxKnobModule } from 'jqwidgets-ng/jqxknob';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, jqxKnobModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }