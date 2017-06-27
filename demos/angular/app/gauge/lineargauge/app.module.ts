import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { LinearGaugeModule } from '../../modules/lineargauge.module';
import { CheckBoxModule } from '../../modules/checkbox.module';
import { ButtonModule } from '../../modules/button.module';
import { ExpanderModule } from '../../modules/expander.module';
import { RadioButtonModule } from '../../modules/radiobutton.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, LinearGaugeModule, CheckBoxModule, ButtonModule, ExpanderModule, RadioButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }