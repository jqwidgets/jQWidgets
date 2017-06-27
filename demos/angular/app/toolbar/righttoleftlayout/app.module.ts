import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ToolBarModule } from '../../modules/toolbar.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
    BrowserModule, CommonModule, ToolBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


