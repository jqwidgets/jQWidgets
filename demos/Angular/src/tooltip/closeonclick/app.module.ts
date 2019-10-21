import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxTooltipModule } from 'jqwidgets-ng/jqxtooltip';

@NgModule({
    declarations: [
        AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
