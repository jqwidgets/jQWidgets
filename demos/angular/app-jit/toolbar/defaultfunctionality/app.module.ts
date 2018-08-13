import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToolBarModule } from '../../modules/toolbar.module';
import { InputModule } from '../../modules/input.module';
import { ButtonModule } from '../../modules/button.module';
import { ComboBoxModule } from '../../modules/combobox.module';
import { DropDownListModule } from '../../modules/dropdownlist.module';


@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, FormsModule, ToolBarModule, InputModule, ButtonModule, ComboBoxModule, DropDownListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }