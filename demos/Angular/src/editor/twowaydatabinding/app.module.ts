import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { jqxEditorModule } from 'jqwidgets-ng/jqxeditor';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, FormsModule, jqxEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }