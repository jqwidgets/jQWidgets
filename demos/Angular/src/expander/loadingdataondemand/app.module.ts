import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { jqxExpanderModule } from 'jqwidgets-ng/jqxexpander';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, HttpClientModule, jqxExpanderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }