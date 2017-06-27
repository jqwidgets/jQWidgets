import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { jqxFormattedInputComponent } from '../../jqwidgets-ts/angular_jqxformattedinput';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [jqxFormattedInputComponent],
    exports: [jqxFormattedInputComponent],
})
export class FormattedInputModule { }

