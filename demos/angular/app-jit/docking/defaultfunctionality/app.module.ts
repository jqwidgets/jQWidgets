import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { DockingModule }   from '../../modules/docking.module';
import { CalendarModule }   from '../../modules/calendar.module';
import { TabsModule }   from '../../modules/tabs.module';
import { ListBoxModule }   from '../../modules/listbox.module';
import { PanelModule }   from '../../modules/panel.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, DockingModule, 
	  CalendarModule, TabsModule, ListBoxModule, PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }




