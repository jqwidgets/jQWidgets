import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { jqxToolBarModule } from 'jqwidgets-ng/jqxtoolbar';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';

@NgModule({
    declarations: [
        AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, FormsModule, 
	  jqxToolBarModule, jqxButtonModule, jqxDropDownListModule, jqxNumberInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


