import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AppComponent } from './app.component';
import { jqxSplitLayoutModule } from 'jqwidgets-ng/jqxsplitlayout';
import { jqxTreeModule } from 'jqwidgets-ng/jqxtree';
import { jqxListBoxModule } from 'jqwidgets-ng/jqxlistbox';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
    BrowserModule, CommonModule, jqxSplitLayoutModule, jqxListBoxModule, jqxTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


