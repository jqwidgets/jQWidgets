import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxScrollBarComponent } from '../../jqwidgets-ts/angular_jqxscrollbar';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxScrollBarComponent],
    exports: [jqxScrollBarComponent],
})
export class ScrollBarModule { }

