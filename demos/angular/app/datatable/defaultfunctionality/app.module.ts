import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxDataTableComponent } from '../../../../../jqwidgets-ts/angular_jqxdatatable';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxDataTableComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

