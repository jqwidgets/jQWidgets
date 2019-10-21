import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxTabsModule } from 'jqwidgets-ng/jqxtabs';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxChartModule } from 'jqwidgets-ng/jqxchart';

@NgModule({
    declarations: [
        AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxTabsModule, jqxGridModule, jqxChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


