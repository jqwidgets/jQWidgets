import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxKnobModule } from 'jqwidgets-ng/jqxknob';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, jqxKnobModule, jqxNumberInputModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }