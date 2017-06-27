import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxGaugeComponent } from '../../jqwidgets-ts/angular_jqxgauge';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxGaugeComponent],
    exports: [jqxGaugeComponent],
})
export class GaugeModule { }

