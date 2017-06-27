import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxSchedulerComponent } from '../../jqwidgets-ts/angular_jqxscheduler';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxSchedulerComponent],
    exports: [jqxSchedulerComponent],
})
export class SchedulerModule { }

