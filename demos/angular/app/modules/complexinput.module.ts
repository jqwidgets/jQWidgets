import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { jqxComplexInputComponent } from '../../jqwidgets-ts/angular_jqxcomplexinput';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [jqxComplexInputComponent],
    exports: [jqxComplexInputComponent],
})
export class ComplexInputModule { }

