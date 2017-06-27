import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxPanelComponent } from '../../jqwidgets-ts/angular_jqxpanel';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxPanelComponent],
    exports: [jqxPanelComponent],
})
export class PanelModule { }

