import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { DropDownButtonModule } from '../../modules/dropdownbutton.module';
import { CheckBoxModule } from '../../modules/checkbox.module';
import { TreeModule } from '../../modules/tree.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, DropDownButtonModule, CheckBoxModule, TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


