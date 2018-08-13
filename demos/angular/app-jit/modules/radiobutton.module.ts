import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxRadioButtonComponent } from '../../jqwidgets-ts/angular_jqxradiobutton';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxRadioButtonComponent],
    exports: [jqxRadioButtonComponent],
})
export class RadioButtonModule { }

