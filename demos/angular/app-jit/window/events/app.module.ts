import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { WindowModule } from '../../modules/window.module';
import { ButtonModule } from '../../modules/button.module';
import { PanelModule } from '../../modules/panel.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
    BrowserModule, CommonModule, WindowModule, ButtonModule, PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


