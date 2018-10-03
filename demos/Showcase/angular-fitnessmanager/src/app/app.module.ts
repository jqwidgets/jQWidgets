import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { jqxMenuComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxmenu';
import { jqxDockingComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdocking';
import { jqxKnobComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxknob';
import { jqxLinearGaugeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxlineargauge';
import { jqxRadioButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxradiobutton';
import { jqxListBoxComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxlistbox';
import { jqxSchedulerComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxscheduler';
import { jqxExpanderComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxexpander';
import { jqxTagCloudComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtagcloud';
import { jqxTreeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtree';
import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';
import { jqxKanbanComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxkanban';
import { jqxSplitterComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxsplitter';
import { jqxDropDownListComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownlist';
import { jqxInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxinput';
import { jqxEditorComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxeditor';
import { jqxButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbuttons';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoomsSchedulesComponent } from './rooms-schedules/rooms-schedules.component';
import { InstructorsSchedulesComponent } from './instructors-schedules/instructors-schedules.component';
import { FitnessInstructorsComponent } from './fitness-instructors/fitness-instructors.component';
import { WorkloadChartComponent } from './workload-chart/workload-chart.component';
import { AdministrativeTasksComponent } from './administrative-tasks/administrative-tasks.component';
import { QuickNotesComponent } from './quick-notes/quick-notes.component';

const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'rooms-schedules', component: RoomsSchedulesComponent },
    { path: 'instructors-schedules', component: InstructorsSchedulesComponent },
    { path: 'fitness-instructors', component: FitnessInstructorsComponent },
    { path: 'workload-chart', component: WorkloadChartComponent },
    { path: 'administrative-tasks', component: AdministrativeTasksComponent },
    { path: 'quick-notes', component: QuickNotesComponent },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },

];

@NgModule({
    declarations: [
        AppComponent,

        jqxGridComponent,
        jqxMenuComponent,
        jqxDockingComponent,
        jqxKnobComponent,
        jqxLinearGaugeComponent,
        jqxRadioButtonComponent,
        jqxListBoxComponent,
        jqxSchedulerComponent,
        jqxExpanderComponent,
        jqxTagCloudComponent,
        jqxTreeComponent,
        jqxChartComponent,
        jqxKanbanComponent,
        jqxSplitterComponent,
        jqxDropDownListComponent,
        jqxInputComponent,
        jqxEditorComponent,
        jqxButtonComponent,

        DashboardComponent,
        RoomsSchedulesComponent,
        InstructorsSchedulesComponent,
        FitnessInstructorsComponent,
        WorkloadChartComponent,
        AdministrativeTasksComponent,
        QuickNotesComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
