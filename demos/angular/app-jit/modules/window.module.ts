import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxWindowComponent } from '../../jqwidgets-ts/angular_jqxwindow';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxWindowComponent],
    exports: [jqxWindowComponent],
})
export class WindowModule { }

