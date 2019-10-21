import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, jqxComboBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


