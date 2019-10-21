import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { jqxTreeModule } from 'jqwidgets-ng/jqxtree';
import { jqxExpanderModule } from 'jqwidgets-ng/jqxexpander';

@NgModule({
    declarations: [
        AppComponent
  ],
  imports: [
      BrowserModule, jqxTreeModule, jqxExpanderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
