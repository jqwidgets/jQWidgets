import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxChartComponent }        from '../../../../../jqwidgets-ts/angular_jqxChart';
import { jqxSliderComponent }       from '../../../../../jqwidgets-ts/angular_jqxslider';
import { jqxDropDownListComponent } from '../../../../../jqwidgets-ts/angular_jqxdropdownlist'

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxChartComponent, jqxSliderComponent, jqxDropDownListComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

