import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';

@NgModule({
    declarations: [
        AppComponent
  ],
  imports: [
      BrowserModule, jqxTextAreaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }