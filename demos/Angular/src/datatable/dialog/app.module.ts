import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxDataTableModule } from 'jqwidgets-ng/jqxdatatable';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, FormsModule, jqxDataTableModule, jqxButtonModule, jqxDateTimeInputModule, jqxNumberInputModule, jqxInputModule, jqxWindowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }