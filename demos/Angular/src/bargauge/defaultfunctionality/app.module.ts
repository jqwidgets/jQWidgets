import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';

import { jqxBarGaugeModule }   from 'jqwidgets-ng/jqxbargauge';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, CommonModule, jqxBarGaugeModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

