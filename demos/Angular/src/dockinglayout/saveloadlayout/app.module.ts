import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxDockingLayoutModule } from 'jqwidgets-ng/jqxdockinglayout';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxTreeModule } from 'jqwidgets-ng/jqxtree';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxDockingLayoutModule, jqxButtonModule, jqxTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }