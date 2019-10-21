import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxPivotGridModule } from 'jqwidgets-ng/jqxpivotgrid';
import { jqxPivotDesignerModule } from 'jqwidgets-ng/jqxpivotdesigner';

@NgModule({
  declarations: [
    AppComponent	
  ],
  imports: [
    BrowserModule, CommonModule, jqxPivotDesignerModule, jqxPivotGridModule	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }