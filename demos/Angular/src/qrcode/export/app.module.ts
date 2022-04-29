import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AppComponent } from './app.component';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxQRcodeModule } from 'jqwidgets-ng/jqxqrcode';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
    BrowserModule, CommonModule, jqxQRcodeModule, jqxButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


