import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxPivotGridModule } from 'jqwidgets-ng/jqxpivotgrid';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';

@NgModule({
  declarations: [
    AppComponent	
  ],
  imports: [
    BrowserModule, CommonModule, jqxButtonModule, jqxPivotGridModule	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }