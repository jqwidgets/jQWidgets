import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxRatingComponent } from '../../jqwidgets-ts/angular_jqxrating';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxRatingComponent],
    exports: [jqxRatingComponent],
})
export class RatingModule { }

