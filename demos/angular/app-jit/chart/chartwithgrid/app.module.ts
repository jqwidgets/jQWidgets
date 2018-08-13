import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AppComponent } from './app.component';
import { ChartModule }   from '../../modules/chart.module';
import { GridModule } from '../../modules/grid.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, ChartModule, GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


