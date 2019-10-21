import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';

import { jqxDataTableModule }   from 'jqwidgets-ng/jqxdatatable';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, CommonModule, jqxDataTableModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }




