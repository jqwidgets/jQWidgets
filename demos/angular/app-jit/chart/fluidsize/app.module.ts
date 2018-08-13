import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';

import { ChartModule } from '../../modules/chart.module'
import { AppComponent } from './app.component';


@NgModule({
    imports: [BrowserModule, ChartModule, CommonModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

