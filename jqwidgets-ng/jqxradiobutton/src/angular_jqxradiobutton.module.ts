
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { jqxRadioButtonComponent } from './angular_jqxradiobutton';

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [jqxRadioButtonComponent],
  exports: [jqxRadioButtonComponent]
})
export class jqxRadioButtonModule { }

