import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxLayoutModule } from 'jqwidgets-ng/jqxlayout';
import { jqxTreeModule } from 'jqwidgets-ng/jqxtree';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, jqxLayoutModule, jqxTreeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }