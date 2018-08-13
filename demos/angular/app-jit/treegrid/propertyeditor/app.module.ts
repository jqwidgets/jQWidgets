import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TreeGridModule } from '../../modules/treegrid.module';
import { SliderModule } from '../../modules/slider.module';
import { DropDownListModule } from '../../modules/dropdownlist.module';
import { ColorPickerModule } from '../../modules/colorpicker.module';
import { CheckBoxModule } from '../../modules/checkbox.module';
import { InputModule } from '../../modules/input.module';

@NgModule({
    declarations: [
        AppComponent
  ],
    imports: [
        BrowserModule, CommonModule, TreeGridModule, SliderModule, DropDownListModule, ColorPickerModule, CheckBoxModule, InputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


