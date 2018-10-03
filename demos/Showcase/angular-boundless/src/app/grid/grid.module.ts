import { NgModule } from '@angular/core';

import { AngularMaterialModule } from '../angular_material.module';
import { jQWidgetsModule }      from '../jqwidgets.module';

import { GridComponent } from './grid.component';

@NgModule({
    declarations: [ GridComponent ],
    imports: [ AngularMaterialModule, jQWidgetsModule ],
    exports: [ GridComponent ]
})

export class GridModule { }
