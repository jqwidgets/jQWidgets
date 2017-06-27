import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ValidatorModule } from '../../modules/validator.module';
import { ButtonModule } from '../../modules/button.module';
import { CheckBoxModule } from '../../modules/checkbox.module';
import { DateTimeInputModule } from '../../modules/datetimeinput.module';
import { ExpanderModule } from '../../modules/expander.module';
import { InputModule } from '../../modules/input.module';
import { MaskedInputModule } from '../../modules/maskedinput.module';
import { PasswordInputModule } from '../../modules/passwordinput.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, FormsModule, ValidatorModule, ButtonModule, CheckBoxModule,
	  DateTimeInputModule, ExpanderModule, InputModule, MaskedInputModule, PasswordInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


