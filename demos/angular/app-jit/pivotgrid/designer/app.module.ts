import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { PivotGridModule } from '../../modules/pivotgrid.module';
import { PivotDesignerModule } from '../../modules/pivotdesigner.module';

@NgModule({
  declarations: [
    AppComponent	
  ],
  imports: [
    BrowserModule, CommonModule, PivotDesignerModule, PivotGridModule	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }