import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxLayoutModule } from 'jqwidgets-ng/jqxlayout';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxTreeModule } from 'jqwidgets-ng/jqxtree';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';
import { jqxChartModule } from 'jqwidgets-ng/jqxchart';
import { jqxDataTableModule } from 'jqwidgets-ng/jqxdatatable';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, jqxLayoutModule, jqxButtonModule, jqxTreeModule, jqxTextAreaModule, jqxChartModule, jqxDataTableModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }