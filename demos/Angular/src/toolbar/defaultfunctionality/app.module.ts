import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxToolBarModule } from 'jqwidgets-ng/jqxtoolbar';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';


@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, FormsModule, jqxToolBarModule, jqxInputModule, jqxButtonModule, jqxComboBoxModule, jqxDropDownListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }