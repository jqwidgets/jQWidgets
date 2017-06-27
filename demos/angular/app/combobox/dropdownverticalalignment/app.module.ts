import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComboBoxModule } from '../../modules/combobox.module';
import { RadioButtonModule } from '../../modules/radiobutton.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, ComboBoxModule, RadioButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


