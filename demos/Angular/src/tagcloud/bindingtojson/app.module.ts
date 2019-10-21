import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxTagCloudModule } from 'jqwidgets-ng/jqxtagcloud';

@NgModule({
    declarations: [
        AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxTagCloudModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


