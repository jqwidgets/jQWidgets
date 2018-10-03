import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { jqxDropDownListComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxdropdownlist';
import { jqxSwitchButtonComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxswitchbutton';
import { jqxRadioButtonComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxradiobutton';
import { jqxDateTimeInputComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxdatetimeinput';
import { jqxButtonComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxbuttons';

import { ReportsComponent } from './reports.component';

/* Services */
import { DataService } from '../../services/data.service';
import { InfoService } from '../../services/info.service';

@NgModule({
    declarations: [
        ReportsComponent, jqxDropDownListComponent, jqxSwitchButtonComponent, jqxRadioButtonComponent, jqxDateTimeInputComponent, jqxButtonComponent
    ],
    imports: [FormsModule],
    //TODO: Check the row below
    providers: [DataService, InfoService],
    bootstrap: [],
    exports: [
        ReportsComponent
    ]
})
export class ReportsModule { }
