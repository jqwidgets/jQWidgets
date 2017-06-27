import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxSwitchButtonComponent } from '../../jqwidgets-ts/angular_jqxswitchbutton';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxSwitchButtonComponent],
    exports: [jqxSwitchButtonComponent],
})
export class SwitchButtonModule { }

