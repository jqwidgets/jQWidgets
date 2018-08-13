import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { AppComponent } from './app.component';
import { ChartModule }   from '../../modules/chart.module';
import { ButtonModule } from '../../modules/button.module';
import { InputModule } from '../../modules/input.module';
import { DropDownListModule } from '../../modules/dropdownlist.module';
import { ListBoxModule } from '../../modules/listbox.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, FormsModule, CommonModule, ChartModule, ButtonModule, InputModule, DropDownListModule, ListBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


