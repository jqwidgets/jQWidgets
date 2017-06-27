import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComplexInputModule } from '../../modules/complexinput.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, FormsModule, ComplexInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


