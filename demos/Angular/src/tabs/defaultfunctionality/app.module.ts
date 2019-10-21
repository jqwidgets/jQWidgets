import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { jqxTabsModule } from 'jqwidgets-ng/jqxtabs';
import { jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';

@NgModule({
    declarations: [
        AppComponent
  ],
  imports: [
      BrowserModule, jqxTabsModule, jqxCheckBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


