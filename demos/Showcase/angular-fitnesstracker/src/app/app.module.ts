import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { CustomBargaugeComponent } from './innerComponents/customBargaugeComponent/custombargauge.component';
import { DropDownComponent } from './innerComponents/dropDownListComponent/dropdownlist.component';
import { ChartCaloriesComponent } from './innerComponents/chartCaloriesComponent/chart.component';
import { ChartNutritionalValuesComponent } from './innerComponents/chartNutritionalValuesComponent/chart.component';
import { GridDailyCaloriesComponent } from './innerComponents/gridDailyCaloriesComponent/grid.component';
import { PieChartComponent } from './innerComponents/chartPieComponent/chart.component';
import { DonutComponent } from './innerComponents/chartDonut/donut.component';
import { GridFoodComponent } from './innerComponents/gridFoodComponent/grid.component';
import { CustomButtonComponent } from './innerComponents/customButton/button.component';

import { jqxBarGaugeComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxbargauge';
import { jqxDropDownListComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxdropdownlist';
import { jqxChartComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxchart';
import { jqxGridComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxgrid';
import { jqxButtonComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxbuttons';
import { jqxTreeGridComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxtreegrid';

@NgModule({
  declarations: [
    AppComponent,
		CustomBargaugeComponent, ChartCaloriesComponent, ChartNutritionalValuesComponent, GridDailyCaloriesComponent, PieChartComponent, DonutComponent, GridFoodComponent, 
		CustomButtonComponent, DropDownComponent,
		jqxBarGaugeComponent, jqxDropDownListComponent, jqxChartComponent, jqxGridComponent, jqxButtonComponent, jqxTreeGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }