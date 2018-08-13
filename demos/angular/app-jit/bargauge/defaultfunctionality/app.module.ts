import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';

import { BarGaugeModule }   from '../../modules/bargauge.module';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, CommonModule, BarGaugeModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

