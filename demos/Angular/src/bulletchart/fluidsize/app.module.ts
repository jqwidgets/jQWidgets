import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';

import { jqxBulletChartModule }   from 'jqwidgets-ng/jqxbulletchart';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, CommonModule, jqxBulletChartModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }


