import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonModule } from '../../modules/button.module';
import { WindowModule } from '../../modules/window.module';
import { CheckBoxModule } from '../../modules/checkbox.module';
import { TabsModule } from '../../modules/tabs.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, ButtonModule, WindowModule, CheckBoxModule, TabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


