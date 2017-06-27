import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ToolBarModule } from '../../modules/toolbar.module';
import { ButtonModule } from '../../modules/button.module';
import { DropDownListModule } from '../../modules/dropdownlist.module';
import { NumberInputModule } from '../../modules/numberinput.module';

@NgModule({
    declarations: [
        AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, FormsModule, 
	  ToolBarModule, ButtonModule, DropDownListModule, NumberInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


