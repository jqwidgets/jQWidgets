import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { jqxDropDownListComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownlist';
import { jqxLayoutComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxlayout';
import { jqxDataTableComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdatatable';
import { jqxMenuComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxmenu';
import { jqxTabsComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtabs';
import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';
import { jqxBarGaugeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbargauge';
import { jqxWindowComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbuttons';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
      jqxDropDownListComponent,
      jqxLayoutComponent,
      jqxDataTableComponent,
      jqxMenuComponent,
      jqxTabsComponent,
      jqxChartComponent,
      jqxBarGaugeComponent,
      jqxWindowComponent,
      jqxButtonComponent
  ],
  imports: [
      BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
