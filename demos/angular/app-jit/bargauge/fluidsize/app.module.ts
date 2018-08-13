import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { BarGaugeModule } from '../../modules/bargauge.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
    BrowserModule, CommonModule, BarGaugeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


