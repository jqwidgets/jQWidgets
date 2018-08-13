import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxNavBarComponent } from '../../jqwidgets-ts/angular_jqxnavbar';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxNavBarComponent],
    exports: [jqxNavBarComponent],
})
export class NavBarModule { }