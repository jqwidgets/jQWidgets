import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxDockingLayoutModule } from 'jqwidgets-ng/jqxdockinglayout';
import { jqxTreeModule } from 'jqwidgets-ng/jqxtree';
import { jqxMenuModule } from 'jqwidgets-ng/jqxmenu';
import { jqxChartModule } from 'jqwidgets-ng/jqxchart';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxDockingLayoutModule, jqxTreeModule, jqxMenuModule, jqxChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }