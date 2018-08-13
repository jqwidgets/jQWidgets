import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { AppComponent } from './app.component';
import { RepeatButtonModule } from '../../modules/repeatbutton.module';
import { ProgressBarModule } from '../../modules/progressbar.module';


@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, FormsModule, CommonModule, RepeatButtonModule, ProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


