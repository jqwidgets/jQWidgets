import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TreeGridModule } from '../../modules/treegrid.module';
import { ButtonModule } from '../../modules/button.module';
import { DropDownListModule } from '../../modules/dropdownlist.module';

@NgModule({
    declarations: [
        AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, TreeGridModule, ButtonModule, DropDownListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
