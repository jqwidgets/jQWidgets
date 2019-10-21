import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxEditorModule } from 'jqwidgets-ng/jqxeditor';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }