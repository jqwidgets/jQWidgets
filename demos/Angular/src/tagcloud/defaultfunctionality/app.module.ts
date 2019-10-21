import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxTagCloudModule } from 'jqwidgets-ng/jqxtagcloud';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';

@NgModule({
    declarations: [
        AppComponent
  ],
  imports: [
      BrowserModule, FormsModule, jqxTagCloudModule, jqxButtonModule, jqxInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


