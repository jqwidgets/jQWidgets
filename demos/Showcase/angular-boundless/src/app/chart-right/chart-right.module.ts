import { NgModule } from '@angular/core';

import { AngularMaterialModule } from '../angular_material.module';
import { jQWidgetsModule } from '../jqwidgets.module';

import { ChartRightComponent } from './chart-right.component';

@NgModule({
    declarations: [ ChartRightComponent ],
    imports:  [ AngularMaterialModule, jQWidgetsModule ],
    exports: [ ChartRightComponent ]
})

export class ChartRightModule { }
