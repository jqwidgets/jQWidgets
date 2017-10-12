import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';

import { DataTableModule }   from '../../modules/datatable.module';
import { InputModule }   from '../../modules/input.module';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, CommonModule, DataTableModule, InputModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }




