
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { jqxPasswordInputComponent } from './angular_jqxpasswordinput';

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [jqxPasswordInputComponent],
  exports: [jqxPasswordInputComponent]
})
export class jqxPasswordInputModule { }

