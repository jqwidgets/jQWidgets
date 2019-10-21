import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxDropDownListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }