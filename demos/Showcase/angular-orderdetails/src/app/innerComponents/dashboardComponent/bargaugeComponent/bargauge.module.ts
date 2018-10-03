import { NgModule } from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';

import { BarGaugeTarget } from './bargauge.component';
import { jqxBarGaugeComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxbargauge';

@NgModule({
    declarations: [
        BarGaugeTarget, jqxBarGaugeComponent
    ],
    imports: [],
    exports: [
        BarGaugeTarget
    ]
})

export class BarGaugeTargetModule { }