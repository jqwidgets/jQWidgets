import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxFormattedInputModule }   from 'jqwidgets-ng/jqxformattedinput';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, FormsModule, jqxFormattedInputModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }




