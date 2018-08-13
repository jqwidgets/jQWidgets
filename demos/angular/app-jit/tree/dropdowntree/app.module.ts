import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TreeModule } from '../../modules/tree.module';
import { DropDownButtonModule } from '../../modules/dropdownbutton.module';

@NgModule({
    declarations: [
        AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, TreeModule, DropDownButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
