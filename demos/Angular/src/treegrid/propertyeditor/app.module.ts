import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxTreeGridModule } from 'jqwidgets-ng/jqxtreegrid';
import { jqxSliderModule } from 'jqwidgets-ng/jqxslider';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxColorPickerModule } from 'jqwidgets-ng/jqxcolorpicker';
import { jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';

@NgModule({
    declarations: [
        AppComponent
  ],
    imports: [
        BrowserModule, CommonModule, FormsModule, jqxTreeGridModule, jqxSliderModule, jqxDropDownListModule, jqxColorPickerModule, jqxCheckBoxModule, jqxInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


