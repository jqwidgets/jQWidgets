import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TagCloudModule } from '../../modules/tagcloud.module';
import { CheckBoxModule } from '../../modules/checkbox.module';
import { DropDownListModule } from '../../modules/dropdownlist.module';

@NgModule({
    declarations: [
        AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, TagCloudModule, CheckBoxModule, DropDownListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


