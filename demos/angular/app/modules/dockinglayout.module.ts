import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxDockingLayoutComponent } from '../../jqwidgets-ts/angular_jqxdockinglayout';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxDockingLayoutComponent],
    exports: [jqxDockingLayoutComponent],
})
export class DockingLayoutModule { }

