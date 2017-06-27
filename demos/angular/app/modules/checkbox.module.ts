import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { jqxCheckBoxComponent } from '../../jqwidgets-ts/angular_jqxcheckbox';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [jqxCheckBoxComponent],
    exports: [jqxCheckBoxComponent],
})
export class CheckBoxModule { }

