import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { DataTableModule } from '../../modules/datatable.module';
import { InputModule } from '../../modules/input.module';
import { SliderModule } from '../../modules/slider.module';
import { DropDownListModule } from '../../modules/dropdownlist.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, DataTableModule, DropDownListModule, SliderModule, InputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


