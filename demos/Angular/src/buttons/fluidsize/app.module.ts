import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { jqxButtonModule }   from 'jqwidgets-ng/jqxbuttons';
import { jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';
import { jqxRadioButtonModule } from 'jqwidgets-ng/jqxradiobutton';
import { jqxDropDownButtonModule } from 'jqwidgets-ng/jqxdropdownbutton';
import { jqxSwitchButtonModule} from 'jqwidgets-ng/jqxswitchbutton';


@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, jqxButtonModule, jqxCheckBoxModule, jqxRadioButtonModule, jqxDropDownButtonModule, jqxSwitchButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


