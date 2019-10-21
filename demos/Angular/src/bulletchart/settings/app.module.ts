import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { jqxBulletChartModule } from 'jqwidgets-ng/jqxbulletchart';
import { jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxExpanderModule } from 'jqwidgets-ng/jqxexpander';
import { jqxRadioButtonModule } from 'jqwidgets-ng/jqxradiobutton';
import { jqxSliderModule } from 'jqwidgets-ng/jqxslider';

@NgModule({
  declarations: [
      AppComponent 
  ],
  imports: [
      BrowserModule, jqxBulletChartModule, jqxCheckBoxModule, jqxDropDownListModule,
      jqxExpanderModule, jqxRadioButtonModule, jqxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


