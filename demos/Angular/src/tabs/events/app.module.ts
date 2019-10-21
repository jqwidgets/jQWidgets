import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxTabsModule } from 'jqwidgets-ng/jqxtabs';
import { jqxPanelModule } from 'jqwidgets-ng/jqxpanel';

@NgModule({
    declarations: [
        AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxTabsModule, jqxPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


