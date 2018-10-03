import { NgModule } from '@angular/core';

import { AngularMaterialModule } from '../angular_material.module';
import { jQWidgetsModule } from '../jqwidgets.module';

import { ChartMiniComponent } from './chart-mini.component';

@NgModule({
    declarations: [ ChartMiniComponent ],
    imports: [ AngularMaterialModule, jQWidgetsModule ],
    exports: [ ChartMiniComponent ]
})

export class ChartMiniModule { }
