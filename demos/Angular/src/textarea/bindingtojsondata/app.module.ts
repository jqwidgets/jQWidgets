import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';

@NgModule({
    declarations: [
        AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxTextAreaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


