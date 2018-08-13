import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxLayoutComponent } from '../../jqwidgets-ts/angular_jqxlayout';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxLayoutComponent],
    exports: [jqxLayoutComponent],
})
export class LayoutModule { }

