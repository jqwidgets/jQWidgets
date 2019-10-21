import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxTreeModule } from 'jqwidgets-ng/jqxtree';
import { jqxSplitterModule } from 'jqwidgets-ng/jqxsplitter';

@NgModule({
    declarations: [
        AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxTreeModule, jqxSplitterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
