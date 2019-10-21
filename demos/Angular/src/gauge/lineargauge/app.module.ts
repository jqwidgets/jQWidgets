import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxLinearGaugeModule } from 'jqwidgets-ng/jqxlineargauge';
import { jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxExpanderModule } from 'jqwidgets-ng/jqxexpander';
import { jqxRadioButtonModule } from 'jqwidgets-ng/jqxradiobutton';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxLinearGaugeModule, jqxCheckBoxModule, jqxButtonModule, jqxExpanderModule, jqxRadioButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }