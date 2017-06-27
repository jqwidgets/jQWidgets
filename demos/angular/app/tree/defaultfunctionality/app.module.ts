import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeModule } from '../../modules/tree.module';
import { ExpanderModule } from '../../modules/expander.module';

@NgModule({
    declarations: [
        AppComponent
  ],
  imports: [
      BrowserModule, TreeModule, ExpanderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
