import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxListBoxModule } from 'jqwidgets-ng/jqxlistbox';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxWindowModule, jqxListBoxModule, jqxGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }