import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxBarGaugeComponent } from '../../../../../jqwidgets-ts/angular_jqxbargauge';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxBarGaugeComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

