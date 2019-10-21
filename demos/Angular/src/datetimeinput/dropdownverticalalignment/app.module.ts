import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, FormsModule, jqxDateTimeInputModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }