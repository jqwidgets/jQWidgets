import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxKnobModule } from 'jqwidgets-ng/jqxknob';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, FormsModule, jqxKnobModule, jqxInputModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }