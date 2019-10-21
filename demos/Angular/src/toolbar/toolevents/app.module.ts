import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxToolBarModule } from 'jqwidgets-ng/jqxtoolbar';
import { jqxColorPickerModule } from 'jqwidgets-ng/jqxcolorpicker';

@NgModule({
    declarations: [
        AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxToolBarModule, jqxColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


