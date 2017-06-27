import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxTextAreaComponent } from '../../jqwidgets-ts/angular_jqxtextarea';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxTextAreaComponent],
    exports: [jqxTextAreaComponent],
})
export class TextAreaModule { }

