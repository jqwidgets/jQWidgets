import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxDropDownListComponent } from '../../jqwidgets-ts/angular_jqxdropdownlist';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxDropDownListComponent],
    exports: [jqxDropDownListComponent],
})
export class DropDownListModule { }

