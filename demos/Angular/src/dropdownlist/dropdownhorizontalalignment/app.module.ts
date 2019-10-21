import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxRadioButtonModule } from 'jqwidgets-ng/jqxradiobutton';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxDropDownListModule, jqxRadioButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }