import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, jqxDateTimeInputModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }