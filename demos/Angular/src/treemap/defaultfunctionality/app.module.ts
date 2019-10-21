import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { jqxTreeMapModule } from 'jqwidgets-ng/jqxtreemap';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, jqxTreeMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


