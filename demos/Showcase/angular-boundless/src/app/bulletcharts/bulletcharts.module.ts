import { NgModule } from '@angular/core';

import { AngularMaterialModule } from '../angular_material.module';
import { jQWidgetsModule } from '../jqwidgets.module';

import { BulletChartsComponent } from './bulletcharts.component';

@NgModule({
    declarations: [ BulletChartsComponent ],
    imports: [ AngularMaterialModule, jQWidgetsModule ],
    exports: [ BulletChartsComponent ]
})

export class BulletChartsModule { }
