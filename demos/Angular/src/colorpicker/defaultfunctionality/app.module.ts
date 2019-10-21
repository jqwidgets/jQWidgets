import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { jqxColorPickerModule } from 'jqwidgets-ng/jqxcolorpicker';
import { jqxDropDownButtonModule } from 'jqwidgets-ng/jqxdropdownbutton';
import { jqxScrollViewModule } from 'jqwidgets-ng/jqxscrollview';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, jqxColorPickerModule, jqxDropDownButtonModule, jqxScrollViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


