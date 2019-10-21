import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AppComponent } from './app.component';
import { jqxToggleButtonModule } from 'jqwidgets-ng/jqxtogglebutton';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxToggleButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


