import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';

import { AppComponent } from './app.component';
import { ChartModule } from '../../modules/chart.module'

@NgModule({
    imports: [BrowserModule, CommonModule, ChartModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }