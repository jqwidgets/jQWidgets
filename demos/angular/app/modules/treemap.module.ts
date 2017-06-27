import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxTreeMapComponent } from '../../jqwidgets-ts/angular_jqxtreemap';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxTreeMapComponent],
    exports: [jqxTreeMapComponent],
})
export class TreeMapModule { }

