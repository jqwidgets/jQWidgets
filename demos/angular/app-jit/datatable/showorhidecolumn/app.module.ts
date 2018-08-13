import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { DataTableModule } from '../../modules/datatable.module';
import { ListBoxModule } from '../../modules/listbox.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, DataTableModule, ListBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }