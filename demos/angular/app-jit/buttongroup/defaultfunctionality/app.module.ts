import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AppComponent } from './app.component';
import { ButtonGroupModule } from '../../modules/buttongroup.module';
import { RadioButtonModule } from '../../modules/radiobutton.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
    BrowserModule, CommonModule, ButtonGroupModule, RadioButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


