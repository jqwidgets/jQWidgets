import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsModule } from '../../modules/tabs.module';
import { CheckBoxModule } from '../../modules/checkbox.module';

@NgModule({
    declarations: [
        AppComponent
  ],
  imports: [
      BrowserModule, TabsModule, CheckBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


