import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxBarGaugeComponent } from '../../jqwidgets-ts/angular_jqxbargauge';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxBarGaugeComponent],
    exports: [jqxBarGaugeComponent],
})
export class BarGaugeModule { }

