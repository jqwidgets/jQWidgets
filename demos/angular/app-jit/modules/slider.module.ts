import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxSliderComponent } from '../../jqwidgets-ts/angular_jqxslider';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxSliderComponent],
    exports: [jqxSliderComponent],
})
export class SliderModule { }

