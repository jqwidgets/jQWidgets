import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';
import { jqxTabsModule } from 'jqwidgets-ng/jqxtabs';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, jqxButtonModule, jqxWindowModule, jqxCheckBoxModule, jqxTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


