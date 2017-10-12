import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { DockingLayoutModule } from '../../modules/dockinglayout.module';
import { ButtonModule } from '../../modules/button.module';
import { TreeModule } from '../../modules/tree.module';
import { ChartModule } from '../../modules/chart.module';
import { TextAreaModule } from '../../modules/textarea.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, DockingLayoutModule, ButtonModule, TreeModule, ChartModule, TextAreaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }