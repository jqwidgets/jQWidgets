import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { EditorModule } from '../../modules/editor.module';
import { ButtonModule } from '../../modules/button.module';
import { WindowModule } from '../../modules/window.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, EditorModule, ButtonModule, WindowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }