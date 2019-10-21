import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, FormsModule, jqxInputModule, jqxButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }