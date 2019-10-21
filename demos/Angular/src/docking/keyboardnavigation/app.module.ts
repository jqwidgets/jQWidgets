import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxDockingModule }   from 'jqwidgets-ng/jqxdocking';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxDockingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }




