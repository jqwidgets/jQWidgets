import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TreeMapModule } from '../../modules/treemap.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, TreeMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


