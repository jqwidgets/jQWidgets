import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TreeGridModule } from '../../modules/treegrid.module';
import { MenuModule } from '../../modules/menu.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, TreeGridModule, MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


