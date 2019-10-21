import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { jqxTooltipModule } from 'jqwidgets-ng/jqxtooltip';

@NgModule({
    declarations: [
        AppComponent
  ],
  imports: [
      BrowserModule, jqxTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
