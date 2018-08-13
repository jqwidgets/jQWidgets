import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataTableModule } from '../../modules/datatable.module';
import { ButtonModule } from '../../modules/button.module';
import { DropDownListModule } from '../../modules/dropdownlist.module';
import { InputModule } from '../../modules/input.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, FormsModule, DataTableModule, ButtonModule, DropDownListModule, InputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }