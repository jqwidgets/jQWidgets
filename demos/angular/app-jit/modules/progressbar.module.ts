import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxProgressBarComponent } from '../../jqwidgets-ts/angular_jqxprogressbar';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxProgressBarComponent],
    exports: [jqxProgressBarComponent],
})
export class ProgressBarModule { }

