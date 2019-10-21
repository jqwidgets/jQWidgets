import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxSliderModule } from 'jqwidgets-ng/jqxslider';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxGridModule, jqxSliderModule, jqxInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }