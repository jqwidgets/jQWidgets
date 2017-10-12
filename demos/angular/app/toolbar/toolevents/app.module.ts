import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ToolBarModule } from '../../modules/toolbar.module';
import { ColorPickerModule } from '../../modules/colorpicker.module';

@NgModule({
    declarations: [
        AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, ToolBarModule, ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


