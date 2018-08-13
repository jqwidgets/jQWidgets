import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextAreaModule } from '../../modules/textarea.module';

@NgModule({
    declarations: [
        AppComponent
  ],
  imports: [
      BrowserModule, TextAreaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }