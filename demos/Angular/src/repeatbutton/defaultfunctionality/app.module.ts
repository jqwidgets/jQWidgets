import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { AppComponent } from './app.component';
import { jqxRepeatButtonModule } from 'jqwidgets-ng/jqxrepeatbutton';
import { jqxProgressBarModule } from 'jqwidgets-ng/jqxprogressbar';


@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, FormsModule, CommonModule, jqxRepeatButtonModule, jqxProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


