import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';

import { BulletChartModule }   from '../../modules/bulletchart.module';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, CommonModule, BulletChartModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }


