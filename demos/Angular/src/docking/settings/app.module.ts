import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxDockingModule } from 'jqwidgets-ng/jqxdocking';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';
import { jqxSliderModule } from 'jqwidgets-ng/jqxslider';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxDockingModule, jqxButtonModule, jqxCheckBoxModule, jqxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }