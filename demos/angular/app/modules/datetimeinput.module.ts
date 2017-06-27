import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { jqxDateTimeInputComponent } from '../../jqwidgets-ts/angular_jqxdatetimeinput';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [jqxDateTimeInputComponent],
    exports: [jqxDateTimeInputComponent],
})
export class DateTimeInputModule { }

