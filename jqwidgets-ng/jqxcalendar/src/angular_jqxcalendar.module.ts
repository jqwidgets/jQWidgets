
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { jqxCalendarComponent } from './angular_jqxcalendar';

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [jqxCalendarComponent],
  exports: [jqxCalendarComponent]
})
export class jqxCalendarModule { }

