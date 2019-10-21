import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AppComponent } from './app.component';
import { jqxChartModule }   from 'jqwidgets-ng/jqxchart';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxChartModule, jqxGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


