import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxComplexInputModule } from 'jqwidgets-ng/jqxcomplexinput';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, FormsModule, jqxButtonModule, jqxComplexInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


