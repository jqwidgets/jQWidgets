
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { jqxComboBoxComponent } from './angular_jqxcombobox';

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [jqxComboBoxComponent],
  exports: [jqxComboBoxComponent]
})
export class jqxComboBoxModule { }

