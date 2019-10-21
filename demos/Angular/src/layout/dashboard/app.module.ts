import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxLayoutModule } from 'jqwidgets-ng/jqxlayout';
import { jqxTreeModule } from 'jqwidgets-ng/jqxtree';
import { jqxListBoxModule } from 'jqwidgets-ng/jqxlistbox';
import { jqxDataTableModule } from 'jqwidgets-ng/jqxdatatable';
import { jqxChartModule } from 'jqwidgets-ng/jqxchart';
import { jqxMenuModule } from 'jqwidgets-ng/jqxmenu';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, jqxLayoutModule, jqxTreeModule, jqxListBoxModule, jqxDataTableModule, jqxChartModule, jqxMenuModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }