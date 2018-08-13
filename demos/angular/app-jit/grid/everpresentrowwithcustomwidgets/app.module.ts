import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { GridModule } from '../../modules/grid.module';
import { RadioButtonModule } from '../../modules/radiobutton.module';
import { InputModule } from '../../modules/input.module';
import { NumberInputModule } from '../../modules/numberinput.module';
import { DropDownListModule } from '../../modules/dropdownlist.module';
import { DateTimeInputModule } from '../../modules/datetimeinput.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, GridModule, RadioButtonModule, DateTimeInputModule, InputModule, NumberInputModule, DropDownListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }