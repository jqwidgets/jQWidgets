import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TextAreaModule } from '../../modules/textarea.module';

@NgModule({
    declarations: [
        AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, TextAreaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


