import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxTabsModule } from 'jqwidgets-ng/jqxtabs';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';
import { jqxListBoxModule } from 'jqwidgets-ng/jqxlistbox';

@NgModule({
    declarations: [
        AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxTabsModule, jqxButtonModule, jqxCheckBoxModule, jqxListBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


