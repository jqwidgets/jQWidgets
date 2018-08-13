import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TreeGridModule } from '../../modules/treegrid.module';
import { ButtonModule } from '../../modules/button.module';
import { DropDownListModule } from '../../modules/dropdownlist.module';
import { InputModule } from '../../modules/input.module';
import { PanelModule } from '../../modules/panel.module';

@NgModule({
    declarations: [
        AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, FormsModule, TreeGridModule, 
	  ButtonModule, DropDownListModule, InputModule, PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


