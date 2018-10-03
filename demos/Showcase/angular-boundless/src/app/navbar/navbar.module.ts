import { NgModule } from '@angular/core';

import { AngularMaterialModule } from '../angular_material.module';

import { NavBarComponent } from './navbar.component';

@NgModule({
    declarations: [ NavBarComponent ],
    imports: [ AngularMaterialModule ],
    exports: [ NavBarComponent ]
})

export class NavBarModule { }
