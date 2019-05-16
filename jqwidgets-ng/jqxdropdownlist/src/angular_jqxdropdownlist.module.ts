
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { jqxDropDownListComponent } from './angular_jqxdropdownlist';

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [jqxDropDownListComponent],
  exports: [jqxDropDownListComponent]
})
export class jqxDropDownListModule { }

