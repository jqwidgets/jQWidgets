import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxDockingModule }   from 'jqwidgets-ng/jqxdocking';
import { jqxCalendarModule }   from 'jqwidgets-ng/jqxcalendar';
import { jqxTabsModule }   from 'jqwidgets-ng/jqxtabs';
import { jqxListBoxModule }   from 'jqwidgets-ng/jqxlistbox';
import { jqxPanelModule }   from 'jqwidgets-ng/jqxpanel';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxDockingModule, 
	  jqxCalendarModule, jqxTabsModule, jqxListBoxModule, jqxPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }




