import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AppComponent } from './app.component';
import { jqxSplitLayoutModule } from 'jqwidgets-ng/jqxsplitlayout';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
    BrowserModule, CommonModule, jqxSplitLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


