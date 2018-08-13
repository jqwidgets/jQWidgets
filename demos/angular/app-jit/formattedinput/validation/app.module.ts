import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { FormattedInputModule }   from '../../modules/formattedinput.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, FormsModule, FormattedInputModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }




