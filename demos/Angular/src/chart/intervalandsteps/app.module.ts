import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AppComponent } from './app.component';
import { jqxChartModule }   from 'jqwidgets-ng/jqxchart';
import { jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxChartModule, jqxCheckBoxModule, jqxNumberInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


