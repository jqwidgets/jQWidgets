import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeGridModule } from '../../modules/treegrid.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, TreeGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


