import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxLinearGaugeComponent } from '../../jqwidgets-ts/angular_jqxlineargauge';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxLinearGaugeComponent],
    exports: [jqxLinearGaugeComponent],
})
export class LinearGaugeModule { }

