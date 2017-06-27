import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxButtonGroupComponent } from '../../jqwidgets-ts/angular_jqxbuttongroup';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxButtonGroupComponent],
    exports: [jqxButtonGroupComponent],
})
export class ButtonGroupModule { }

