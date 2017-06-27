import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxResponsivePanelComponent } from '../../jqwidgets-ts/angular_jqxresponsivepanel';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxResponsivePanelComponent],
    exports: [jqxResponsivePanelComponent],
})
export class ResponsivePanelModule { }

