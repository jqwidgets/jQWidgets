import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxBulletChartComponent } from '../../../../../jqwidgets-ts/angular_jqxbulletchart';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxBulletChartComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

