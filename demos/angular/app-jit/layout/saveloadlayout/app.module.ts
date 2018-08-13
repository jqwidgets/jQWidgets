import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { LayoutModule } from '../../modules/layout.module';
import { ButtonModule } from '../../modules/button.module';
import { TreeModule } from '../../modules/tree.module';
import { TextAreaModule } from '../../modules/textarea.module';
import { ChartModule } from '../../modules/chart.module';
import { DataTableModule } from '../../modules/datatable.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, LayoutModule, ButtonModule, TreeModule, TextAreaModule, ChartModule, DataTableModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }