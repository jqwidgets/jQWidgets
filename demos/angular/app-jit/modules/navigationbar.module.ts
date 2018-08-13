import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { jqxNavigationBarComponent } from '../../jqwidgets-ts/angular_jqxnavigationbar';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxNavigationBarComponent],
    exports: [jqxNavigationBarComponent],
})
export class NavigationBarModule { }

