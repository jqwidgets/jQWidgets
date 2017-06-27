import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComboBoxModule } from '../../modules/combobox.module';
import { ButtonModule } from '../../modules/button.module';
import { CheckBoxModule } from '../../modules/checkbox.module';
import { DropDownListModule } from '../../modules/dropdownlist.module';
import { ExpanderModule } from '../../modules/expander.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, ComboBoxModule, ButtonModule, CheckBoxModule, DropDownListModule, ExpanderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


