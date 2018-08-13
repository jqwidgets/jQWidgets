import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TagCloudModule } from '../../modules/tagcloud.module';
import { ColorPickerModule } from '../../modules/colorpicker.module';
import { DropDownButtonModule } from '../../modules/dropdownbutton.module';

@NgModule({
    declarations: [
        AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, TagCloudModule, ColorPickerModule, DropDownButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


