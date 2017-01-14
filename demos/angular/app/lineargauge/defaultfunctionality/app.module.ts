import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxLinearGaugeComponent } from '../../../../../jqwidgets-ts/angular_jqxlineargauge';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxLinearGaugeComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

