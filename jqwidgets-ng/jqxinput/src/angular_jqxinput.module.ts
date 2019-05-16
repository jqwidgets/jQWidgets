
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { jqxInputComponent } from './angular_jqxinput';

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [jqxInputComponent],
  exports: [jqxInputComponent]
})
export class jqxInputModule { }
