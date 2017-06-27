import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxComboBoxComponent } from '../../jqwidgets-ts/angular_jqxcombobox';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxComboBoxComponent],
    exports: [jqxComboBoxComponent],
})
export class ComboBoxModule { }

