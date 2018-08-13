import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TooltipModule } from '../../modules/tooltip.module';
import { ButtonModule } from '../../modules/button.module';

@NgModule({
    declarations: [
        AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, TooltipModule, ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
