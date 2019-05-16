
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { jqxTextAreaComponent } from './angular_jqxtextarea';

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [jqxTextAreaComponent],
  exports: [jqxTextAreaComponent]
})
export class jqxTextAreaModule { }

