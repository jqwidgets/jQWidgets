
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { jqxMaskedInputComponent } from './angular_jqxmaskedinput';

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [jqxMaskedInputComponent],
  exports: [jqxMaskedInputComponent]
})
export class jqxMaskedInputModule { }

