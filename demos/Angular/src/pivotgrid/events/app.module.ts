import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxPivotGridModule } from 'jqwidgets-ng/jqxpivotgrid';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';


@NgModule({
  declarations: [
    AppComponent	
  ],
  imports: [
    BrowserModule, CommonModule, jqxButtonModule, jqxTextAreaModule,jqxWindowModule, jqxPivotGridModule	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }