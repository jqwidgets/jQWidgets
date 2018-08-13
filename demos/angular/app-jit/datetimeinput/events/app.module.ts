import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DateTimeInputModule } from '../../modules/datetimeinput.module';
import { PanelModule } from '../../modules/panel.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, FormsModule, DateTimeInputModule, PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }