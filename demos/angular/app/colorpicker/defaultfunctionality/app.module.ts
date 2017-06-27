import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorPickerModule } from '../../modules/colorpicker.module';
import { DropDownButtonModule } from '../../modules/dropdownbutton.module';
import { ScrollViewModule } from '../../modules/scrollview.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, ColorPickerModule, DropDownButtonModule, ScrollViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


