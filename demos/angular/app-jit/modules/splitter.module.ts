import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxSplitterComponent } from '../../jqwidgets-ts/angular_jqxsplitter';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxSplitterComponent],
    exports: [jqxSplitterComponent],
})
export class SplitterModule { }

