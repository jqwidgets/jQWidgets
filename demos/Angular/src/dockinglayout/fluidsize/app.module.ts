import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxDockingLayoutModule } from 'jqwidgets-ng/jqxdockinglayout';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxDockingLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }