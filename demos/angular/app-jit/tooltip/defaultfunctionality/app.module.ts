import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TooltipModule } from '../../modules/tooltip.module';

@NgModule({
    declarations: [
        AppComponent
  ],
  imports: [
      BrowserModule, TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
