import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxChartModule } from 'jqwidgets-ng/jqxchart';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, FormsModule, jqxGridModule, jqxWindowModule, jqxChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }