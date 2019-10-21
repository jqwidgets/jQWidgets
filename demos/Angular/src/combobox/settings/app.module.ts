import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxExpanderModule } from 'jqwidgets-ng/jqxexpander';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, jqxComboBoxModule, jqxButtonModule, jqxCheckBoxModule, jqxDropDownListModule, jqxExpanderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


