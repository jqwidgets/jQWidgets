
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { jqxNumberInputComponent } from './angular_jqxnumberinput';

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [jqxNumberInputComponent],
  exports: [jqxNumberInputComponent]
})
export class jqxNumberInputModule { }

