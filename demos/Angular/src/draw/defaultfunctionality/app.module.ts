import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxDrawModule } from 'jqwidgets-ng/jqxdraw';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxDrawModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }