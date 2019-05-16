
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { jqxComplexInputComponent } from './angular_jqxcomplexinput';

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [jqxComplexInputComponent],
  exports: [jqxComplexInputComponent]
})
export class jqxComplexInputModule { }

