import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxComplexInputModule } from 'jqwidgets-ng/jqxcomplexinput';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, FormsModule, jqxComplexInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


