import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxTooltipComponent } from '../../jqwidgets-ts/angular_jqxtooltip';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxTooltipComponent],
    exports: [jqxTooltipComponent],
})
export class TooltipModule { }

