import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxRepeatButtonComponent } from '../../jqwidgets-ts/angular_jqxrepeatbutton';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxRepeatButtonComponent],
    exports: [jqxRepeatButtonComponent],
})
export class RepeatButtonModule { }

