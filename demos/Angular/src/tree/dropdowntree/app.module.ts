import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxTreeModule } from 'jqwidgets-ng/jqxtree';
import { jqxDropDownButtonModule } from 'jqwidgets-ng/jqxdropdownbutton';

@NgModule({
    declarations: [
        AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxTreeModule, jqxDropDownButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
