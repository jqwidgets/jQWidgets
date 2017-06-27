import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ToolBarModule } from '../../modules/toolbar.module';
import { WindowModule } from '../../modules/window.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
    BrowserModule, CommonModule, ToolBarModule, WindowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


