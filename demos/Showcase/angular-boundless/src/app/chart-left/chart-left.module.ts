import { NgModule } from '@angular/core';

import { AngularMaterialModule } from '../angular_material.module';
import { jQWidgetsModule } from '../jqwidgets.module';

import { ChartLeftComponent } from './chart-left.component';

@NgModule({
    declarations: [ ChartLeftComponent ],
    imports: [ AngularMaterialModule, jQWidgetsModule ],
    exports: [ ChartLeftComponent ]
})

export class ChartLeftModule { }
