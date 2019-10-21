import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';

import { AppComponent } from './app.component';
import { jqxChartModule } from 'jqwidgets-ng/jqxchart';

@NgModule({
    imports: [BrowserModule, CommonModule, jqxChartModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }