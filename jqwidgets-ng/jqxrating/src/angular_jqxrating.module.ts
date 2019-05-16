
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { jqxRatingComponent } from './angular_jqxrating';

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [jqxRatingComponent],
  exports: [jqxRatingComponent]
})
export class jqxRatingModule { }

