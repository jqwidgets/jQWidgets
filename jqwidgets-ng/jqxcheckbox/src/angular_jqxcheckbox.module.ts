
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { jqxCheckBoxComponent } from './angular_jqxcheckbox';

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [jqxCheckBoxComponent],
  exports: [jqxCheckBoxComponent]
})
export class jqxCheckBoxModule { }

