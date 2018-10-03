import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { jqxDataTableComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdatatable';
import { jqxInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxinput';
import { jqxButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbuttons';
import { jqxTabsComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtabs';
import { jqxValidatorComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxvalidator';
import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';
import { jqxDateTimeInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdatetimeinput';
import { jqxCheckBoxComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxcheckbox';

import { AppComponent } from './app.component';
import { AddComponentService } from './add-component.service';

@NgModule({
  declarations: [
    AppComponent,
    jqxDataTableComponent,
    jqxInputComponent,
    jqxButtonComponent,
    jqxTabsComponent,
    jqxValidatorComponent,
    jqxChartComponent,
    jqxDateTimeInputComponent,
    jqxCheckBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AddComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
