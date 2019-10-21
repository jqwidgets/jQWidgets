import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxTagCloudModule } from 'jqwidgets-ng/jqxtagcloud';
import { jqxColorPickerModule } from 'jqwidgets-ng/jqxcolorpicker';
import { jqxDropDownButtonModule } from 'jqwidgets-ng/jqxdropdownbutton';

@NgModule({
    declarations: [
        AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxTagCloudModule, jqxColorPickerModule, jqxDropDownButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


