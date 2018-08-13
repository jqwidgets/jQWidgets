import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxKnobComponent } from '../../jqwidgets-ts/angular_jqxknob';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxKnobComponent],
    exports: [jqxKnobComponent],
})
export class KnobModule { }

