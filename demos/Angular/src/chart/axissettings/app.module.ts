import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AppComponent } from './app.component';
import { jqxChartModule }   from 'jqwidgets-ng/jqxchart';
import { jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';
import { jqxRadioButtonModule } from 'jqwidgets-ng/jqxradiobutton';
import { jqxSliderModule } from 'jqwidgets-ng/jqxslider';


@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxChartModule, jqxCheckBoxModule, jqxRadioButtonModule, jqxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


