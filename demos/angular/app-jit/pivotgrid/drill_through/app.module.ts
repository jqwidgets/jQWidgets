import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { PivotGridModule } from '../../modules/pivotgrid.module';
import { WindowModule } from '../../modules/window.module';
import { DataTableModule } from '../../modules/datatable.module';

@NgModule({
  declarations: [
    AppComponent	
  ],
  imports: [
    BrowserModule, CommonModule, WindowModule, DataTableModule, PivotGridModule	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }