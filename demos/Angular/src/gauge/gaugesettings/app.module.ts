import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxGaugeModule } from 'jqwidgets-ng/jqxgauge';
import { jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';
import { jqxExpanderModule } from 'jqwidgets-ng/jqxexpander';
import { jqxRadioButtonModule } from 'jqwidgets-ng/jqxradiobutton';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxGaugeModule, jqxCheckBoxModule, jqxExpanderModule, jqxRadioButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }