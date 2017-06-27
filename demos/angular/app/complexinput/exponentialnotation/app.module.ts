import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComplexInputModule } from '../../modules/complexinput.module';
import { ButtonModule } from '../../modules/button.module';
import { DropDownListModule } from '../../modules/dropdownlist.module';
import { ExpanderModule } from '../../modules/expander.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, FormsModule, ComplexInputModule, ButtonModule, DropDownListModule, ExpanderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


