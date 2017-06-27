import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { jqxListBoxComponent } from '../../jqwidgets-ts/angular_jqxlistbox';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [jqxListBoxComponent],
    exports: [jqxListBoxComponent],
})
export class ListBoxModule { }

