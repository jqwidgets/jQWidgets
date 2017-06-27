import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';

import { DataTableModule }   from '../../modules/datatable.module';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, CommonModule, DataTableModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }




