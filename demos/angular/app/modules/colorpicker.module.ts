import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxColorPickerComponent } from '../../jqwidgets-ts/angular_jqxcolorpicker';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxColorPickerComponent],
    exports: [jqxColorPickerComponent],
})
export class ColorPickerModule { }

