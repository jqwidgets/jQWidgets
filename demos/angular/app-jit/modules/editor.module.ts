import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxEditorComponent } from '../../jqwidgets-ts/angular_jqxeditor';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxEditorComponent],
    exports: [jqxEditorComponent],
})
export class EditorModule { }

