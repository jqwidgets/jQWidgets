import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';

import { AppComponent } from './app.component';
import { GaugeModule } from '../../modules/gauge.module';
import { LinearGaugeModule } from '../../modules/lineargauge.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, GaugeModule, LinearGaugeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }




