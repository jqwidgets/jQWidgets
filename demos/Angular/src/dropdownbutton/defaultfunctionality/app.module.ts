import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxDropDownButtonModule } from 'jqwidgets-ng/jqxdropdownbutton';
import { jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';
import { jqxTreeModule } from 'jqwidgets-ng/jqxtree';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxDropDownButtonModule, jqxCheckBoxModule, jqxTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


