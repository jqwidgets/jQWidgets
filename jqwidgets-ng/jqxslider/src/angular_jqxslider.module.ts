
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { jqxSliderComponent } from './angular_jqxslider';

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [jqxSliderComponent],
  exports: [jqxSliderComponent]
})
export class jqxSliderModule { }

