
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { jqxDateTimeInputComponent } from './angular_jqxdatetimeinput';

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [jqxDateTimeInputComponent],
  exports: [jqxDateTimeInputComponent]
})
export class jqxDateTimeInputModule { }

