import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorPickerModule } from '../../modules/colorpicker.module';
import { RadioButtonModule } from '../../modules/radiobutton.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, ColorPickerModule, RadioButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


