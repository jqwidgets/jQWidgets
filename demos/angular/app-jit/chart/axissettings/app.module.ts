import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AppComponent } from './app.component';
import { ChartModule }   from '../../modules/chart.module';
import { CheckBoxModule } from '../../modules/checkbox.module';
import { RadioButtonModule } from '../../modules/radiobutton.module';
import { SliderModule } from '../../modules/slider.module';


@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, ChartModule, CheckBoxModule, RadioButtonModule, SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


