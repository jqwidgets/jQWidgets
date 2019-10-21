import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { jqxValidatorModule } from 'jqwidgets-ng/jqxvalidator';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxExpanderModule } from 'jqwidgets-ng/jqxexpander';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxMaskedInputModule } from 'jqwidgets-ng/jqxmaskedinput';
import { jqxPasswordInputModule } from 'jqwidgets-ng/jqxpasswordinput';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, FormsModule, jqxValidatorModule, jqxButtonModule, jqxCheckBoxModule,
	  jqxDateTimeInputModule, jqxExpanderModule, jqxInputModule, jqxMaskedInputModule, jqxPasswordInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


