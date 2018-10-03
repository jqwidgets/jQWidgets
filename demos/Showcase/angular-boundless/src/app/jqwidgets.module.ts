import { NgModule } from '@angular/core';

import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { jqxKnobComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxknob';
import { jqxBulletChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbulletchart';

@NgModule({
    declarations:
    [
        jqxChartComponent, jqxGridComponent, jqxKnobComponent, jqxBulletChartComponent
    ],
    exports:
    [
        jqxChartComponent, jqxGridComponent, jqxKnobComponent, jqxBulletChartComponent
    ]
})

export class jQWidgetsModule { }
