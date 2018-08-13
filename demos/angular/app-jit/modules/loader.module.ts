import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxLoaderComponent } from '../../jqwidgets-ts/angular_jqxloader';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxLoaderComponent],
    exports: [jqxLoaderComponent],
})
export class LoaderModule { }

