import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';

import { AppComponent } from './app.component';
import { jqxGaugeModule } from 'jqwidgets-ng/jqxgauge';
import { jqxLinearGaugeModule } from 'jqwidgets-ng/jqxlineargauge';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, jqxGaugeModule, jqxLinearGaugeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }




