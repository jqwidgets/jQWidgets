import { NgModule } from '@angular/core';

import { AngularMaterialModule } from '../angular_material.module';

import { HomeComponent } from './home.component';

@NgModule({
    declarations: [HomeComponent ],
    imports: [ AngularMaterialModule ],
    exports: [HomeComponent ]
})

export class HomeModule { }
