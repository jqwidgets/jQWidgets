import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxBarGaugeModule } from 'jqwidgets-ng/jqxbargauge';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
    BrowserModule, CommonModule, jqxBarGaugeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


