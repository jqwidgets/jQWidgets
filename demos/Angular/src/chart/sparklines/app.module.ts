import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AppComponent } from './app.component';
import { jqxChartModule }   from 'jqwidgets-ng/jqxchart';
import { jqxDataTableModule } from 'jqwidgets-ng/jqxdatatable';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxChartModule, jqxDataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


