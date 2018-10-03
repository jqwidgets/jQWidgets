import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { jqxSplitterComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxsplitter';
import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';
import { jqxProgressBarComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxprogressbar';
import { jqxBarGaugeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbargauge';
import { jqxSortableComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxsortable';
import { jqxDropDownListComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownlist';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { jqxExpanderComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxexpander';

import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { PerformanceComponent } from './performance/performance.component';
import { ProfitComponent } from './profit/profit.component';
import { NewsComponent } from './news/news.component';
import { OverviewChartComponent } from './overview-chart/overview-chart.component';
import { ProgressBarActiveComponent } from './progress-bar-active/progress-bar-active.component';
import { ProgressBarPausedComponent } from './progress-bar-paused/progress-bar-paused.component';
import { ProgressBarEndedComponent } from './progress-bar-ended/progress-bar-ended.component';
import { LeftBarGaugeComponent } from './left-bar-gauge/left-bar-gauge.component';
import { RightBarGaugeComponent } from './right-bar-gauge/right-bar-gauge.component';
import { SortableFirstComponent } from './sortable-first/sortable-first.component';
import { SortableSecondComponent } from './sortable-second/sortable-second.component';
import { SortableThirdComponent } from './sortable-third/sortable-third.component';
import { PerformanceChartComponent } from './performance-chart/performance-chart.component';
import { ProfitDropdownOneComponent } from './profit-dropdown-one/profit-dropdown-one.component';
import { ProfitDropdownTwoComponent } from './profit-dropdown-two/profit-dropdown-two.component';
import { ProfitGridComponent } from './profit-grid/profit-grid.component';
import { NewsDropdownComponent } from './news-dropdown/news-dropdown.component';
import { NewsExpandersComponent } from './news-expanders/news-expanders.component';

import { SharedService } from '../services/shared-service';

const appRoutes: Routes = [
    { path: 'overview', component: OverviewComponent },
    { path: 'performance', component: PerformanceComponent },
    { path: 'profit', component: ProfitComponent },
    { path: 'news', component: NewsComponent },
    {
        path: '',
        redirectTo: '/overview',
        pathMatch: 'full'
    },

];

@NgModule({
    declarations: [
        AppComponent,
        OverviewComponent,
        PerformanceComponent,
        ProfitComponent,
        NewsComponent,

        jqxSplitterComponent,
        jqxChartComponent,
        jqxProgressBarComponent,
        jqxBarGaugeComponent,
        jqxSortableComponent,
        jqxDropDownListComponent,
        jqxGridComponent,
        jqxExpanderComponent,

        OverviewChartComponent,
        ProgressBarActiveComponent,
        ProgressBarPausedComponent,
        ProgressBarEndedComponent,
        LeftBarGaugeComponent,
        RightBarGaugeComponent,
        SortableFirstComponent,
        SortableSecondComponent,
        SortableThirdComponent,
        PerformanceChartComponent,
        ProfitDropdownOneComponent,
        ProfitDropdownTwoComponent,
        ProfitGridComponent,
        NewsDropdownComponent,
        NewsExpandersComponent

    ],
    imports: [
        BrowserModule,
        AngularFontAwesomeModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [SharedService],
    bootstrap: [AppComponent]
})
export class AppModule { }
