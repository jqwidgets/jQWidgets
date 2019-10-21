import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxTreeMapModule } from 'jqwidgets-ng/jqxtreemap';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxTreeMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


