import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeMapModule } from '../../modules/treemap.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, TreeMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


