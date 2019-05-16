
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { jqxListBoxComponent } from './angular_jqxlistbox';

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [jqxListBoxComponent],
  exports: [jqxListBoxComponent]
})
export class jqxListBoxModule { }

