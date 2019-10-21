import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxToolBarModule } from 'jqwidgets-ng/jqxtoolbar';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
    BrowserModule, CommonModule, jqxToolBarModule, jqxWindowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


