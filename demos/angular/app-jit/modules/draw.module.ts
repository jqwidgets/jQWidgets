import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxDrawComponent } from '../../jqwidgets-ts/angular_jqxdraw';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxDrawComponent],
    exports: [jqxDrawComponent],
})
export class DrawModule { }

