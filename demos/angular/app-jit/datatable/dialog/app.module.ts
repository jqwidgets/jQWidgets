import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataTableModule } from '../../modules/datatable.module';
import { ButtonModule } from '../../modules/button.module';
import { DateTimeInputModule } from '../../modules/datetimeinput.module';
import { NumberInputModule } from '../../modules/numberinput.module';
import { InputModule } from '../../modules/input.module';
import { WindowModule } from '../../modules/window.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, FormsModule, DataTableModule, ButtonModule, DateTimeInputModule, NumberInputModule, InputModule, WindowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }