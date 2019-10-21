import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxPivotGridModule } from 'jqwidgets-ng/jqxpivotgrid';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxDataTableModule } from 'jqwidgets-ng/jqxdatatable';

@NgModule({
  declarations: [
    AppComponent	
  ],
  imports: [
    BrowserModule, CommonModule, jqxWindowModule, jqxDataTableModule, jqxPivotGridModule	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }