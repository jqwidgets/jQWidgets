import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxTooltipModule } from 'jqwidgets-ng/jqxtooltip';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';

@NgModule({
    declarations: [
        AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxTooltipModule, jqxButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
