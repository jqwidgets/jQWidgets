import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { GaugeModule } from '../../modules/gauge.module';
import { SliderModule } from '../../modules/slider.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, GaugeModule, SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }