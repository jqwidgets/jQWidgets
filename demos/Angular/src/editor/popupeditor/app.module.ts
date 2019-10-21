import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxEditorModule } from 'jqwidgets-ng/jqxeditor';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxEditorModule, jqxButtonModule, jqxWindowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }