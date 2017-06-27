import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ExpanderModule } from '../../modules/expander.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, HttpModule, ExpanderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }