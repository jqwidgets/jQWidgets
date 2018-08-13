import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxScrollViewComponent } from '../../jqwidgets-ts/angular_jqxscrollview';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxScrollViewComponent],
    exports: [jqxScrollViewComponent],
})
export class ScrollViewModule { }

