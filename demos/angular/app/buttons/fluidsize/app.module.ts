import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonModule } from '../../modules/button.module';
import { CheckBoxModule } from '../../modules/checkbox.module';
import { RadioButtonModule } from '../../modules/radiobutton.module';
import { DropDownButtonModule } from '../../modules/dropdownbutton.module';
import { SwitchButtonModule} from '../../modules/switchbutton.module';


@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, ButtonModule, CheckBoxModule, RadioButtonModule, DropDownButtonModule, SwitchButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


