import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxDataTableModule } from 'jqwidgets-ng/jqxdatatable';
import { jqxListBoxModule } from 'jqwidgets-ng/jqxlistbox';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxDataTableModule, jqxListBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }