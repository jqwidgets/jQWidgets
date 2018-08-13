import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxDropDownButtonComponent } from '../../jqwidgets-ts/angular_jqxdropdownbutton';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxDropDownButtonComponent],
    exports: [jqxDropDownButtonComponent],
})
export class DropDownButtonModule { }

