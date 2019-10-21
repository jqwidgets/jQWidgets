import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxComplexInputModule } from 'jqwidgets-ng/jqxcomplexinput';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxExpanderModule } from 'jqwidgets-ng/jqxexpander';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, FormsModule, jqxComplexInputModule, jqxButtonModule, jqxDropDownListModule, jqxExpanderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


