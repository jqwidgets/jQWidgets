import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { jqxTreeGridModule } from 'jqwidgets-ng/jqxtreegrid';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, jqxTreeGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


