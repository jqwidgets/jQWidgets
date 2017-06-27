import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AppComponent } from './app.component';
import { CalendarModule }   from '../../modules/calendar.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


