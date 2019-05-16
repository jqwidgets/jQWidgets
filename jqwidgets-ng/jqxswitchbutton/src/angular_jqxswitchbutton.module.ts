
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { jqxSwitchButtonComponent } from './angular_jqxswitchbutton';

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [jqxSwitchButtonComponent],
  exports: [jqxSwitchButtonComponent]
})
export class jqxSwitchButtonModule { }

