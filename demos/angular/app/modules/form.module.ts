import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxFormComponent } from '../../jqwidgets-ts/angular_jqxform';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxFormComponent],
    exports: [jqxFormComponent],
})
export class FormModule { }

