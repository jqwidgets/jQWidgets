import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxSortableComponent } from '../../jqwidgets-ts/angular_jqxsortable';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxSortableComponent],
    exports: [jqxSortableComponent],
})
export class SortableModule { }

