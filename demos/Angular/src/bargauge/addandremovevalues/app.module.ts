import { BrowserModule } from '@angular/platform-browser';
import { NgModule }     from '@angular/core';
import { CommonModule }    from '@angular/common';

import { AppComponent } from './app.component';
import { jqxBarGaugeModule }   from 'jqwidgets-ng/jqxbargauge';
import { jqxListBoxModule } from 'jqwidgets-ng/jqxlistbox';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxBarGaugeModule, jqxListBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


