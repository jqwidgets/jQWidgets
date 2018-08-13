import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { DockingLayoutModule } from '../../modules/dockinglayout.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, DockingLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }