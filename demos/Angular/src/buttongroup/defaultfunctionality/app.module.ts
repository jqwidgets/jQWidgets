import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AppComponent } from './app.component';
import { jqxButtonGroupModule } from 'jqwidgets-ng/jqxbuttongroup';
import { jqxRadioButtonModule } from 'jqwidgets-ng/jqxradiobutton';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
    BrowserModule, CommonModule, jqxButtonGroupModule, jqxRadioButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


