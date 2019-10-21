import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { jqxRadioButtonModule } from 'jqwidgets-ng/jqxradiobutton';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, jqxComboBoxModule, jqxRadioButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


