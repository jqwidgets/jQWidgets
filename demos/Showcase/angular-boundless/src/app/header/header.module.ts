import { NgModule } from '@angular/core';

import { AngularMaterialModule } from '../angular_material.module';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [ HeaderComponent ],
  imports: [ AngularMaterialModule ],
  exports: [ HeaderComponent ]
})

export class HeaderModule { }
