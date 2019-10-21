import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxExpanderModule }   from 'jqwidgets-ng/jqxexpander';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, jqxExpanderModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }




