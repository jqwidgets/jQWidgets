import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxDockingLayoutModule } from 'jqwidgets-ng/jqxdockinglayout';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxTreeModule } from 'jqwidgets-ng/jqxtree';
import { jqxChartModule } from 'jqwidgets-ng/jqxchart';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxDockingLayoutModule, jqxButtonModule, jqxTreeModule, jqxChartModule, jqxTextAreaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }