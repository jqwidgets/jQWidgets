import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { DockingLayoutModule } from '../../modules/dockinglayout.module';
import { TreeModule } from '../../modules/tree.module';
import { MenuModule } from '../../modules/menu.module';
import { ChartModule } from '../../modules/chart.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, DockingLayoutModule, TreeModule, MenuModule, ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }