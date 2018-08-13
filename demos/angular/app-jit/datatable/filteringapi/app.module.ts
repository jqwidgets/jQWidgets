import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { DataTableModule } from '../../modules/datatable.module';
import { ButtonModule } from '../../modules/button.module';
import { DropDownListModule } from '../../modules/dropdownlist.module';
import { ListBoxModule } from '../../modules/listbox.module';


@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, DataTableModule, ButtonModule, DropDownListModule, ListBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }