import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxToolBarComponent } from '../../jqwidgets-ts/angular_jqxtoolbar';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxToolBarComponent],
    exports: [jqxToolBarComponent],
})
export class ToolBarModule { }

