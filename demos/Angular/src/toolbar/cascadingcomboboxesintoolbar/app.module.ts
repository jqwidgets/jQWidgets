import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxToolBarModule } from 'jqwidgets-ng/jqxtoolbar';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
    BrowserModule, CommonModule, jqxToolBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


