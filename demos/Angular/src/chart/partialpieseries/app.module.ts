import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';

import { jqxChartModule } from 'jqwidgets-ng/jqxchart';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, jqxChartModule, CommonModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }