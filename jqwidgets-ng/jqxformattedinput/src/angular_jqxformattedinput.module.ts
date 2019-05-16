
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { jqxFormattedInputComponent } from './angular_jqxformattedinput';

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [jqxFormattedInputComponent],
  exports: [jqxFormattedInputComponent]
})
export class jqxFormattedInputModule { }

