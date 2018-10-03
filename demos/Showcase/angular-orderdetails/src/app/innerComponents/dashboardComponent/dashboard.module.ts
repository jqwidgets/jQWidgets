import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { jqxChartComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxchart';
import { jqxBarGaugeComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxbargauge';

import { DashboardComponent } from './dashboard.component';

import { BarGaugeTarget } from './bargaugeComponent/bargauge.component';
import { ChartGeneral } from './chartGeneralComponent/chartgeneral.component';
import { ChartMonthly } from './chartMonthlyComponent/chartmonthly.component';
import { ChartProduct } from './chartProductComponent/chartproduct.component';

import { DataService } from '../../services/data.service';
import { InfoService } from '../../services/info.service';

@NgModule({
    declarations: [
        DashboardComponent,
        jqxBarGaugeComponent, jqxChartComponent,
        BarGaugeTarget, ChartGeneral, ChartMonthly, ChartProduct
	],
	imports: [
	],
    providers: [ DataService, InfoService ],
    bootstrap: [],
    exports: [
        DashboardComponent
    ]
})
export class DashboardModule { }
