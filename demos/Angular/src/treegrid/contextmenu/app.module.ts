import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxTreeGridModule } from 'jqwidgets-ng/jqxtreegrid';
import { jqxMenuModule } from 'jqwidgets-ng/jqxmenu';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxTreeGridModule, jqxMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


