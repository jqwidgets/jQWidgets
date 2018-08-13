import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BulletChartModule } from '../../modules/bulletchart.module';
import { CheckBoxModule } from '../../modules/checkbox.module';
import { DropDownListModule } from '../../modules/dropdownlist.module';
import { ExpanderModule } from '../../modules/expander.module';
import { RadioButtonModule } from '../../modules/radiobutton.module';
import { SliderModule } from '../../modules/slider.module';

@NgModule({
  declarations: [
      AppComponent 
  ],
  imports: [
      BrowserModule, BulletChartModule, CheckBoxModule, DropDownListModule,
      ExpanderModule, RadioButtonModule, SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


