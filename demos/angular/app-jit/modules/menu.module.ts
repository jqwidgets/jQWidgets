import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxMenuComponent } from '../../jqwidgets-ts/angular_jqxmenu';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxMenuComponent],
    exports: [jqxMenuComponent],
})
export class MenuModule { }

