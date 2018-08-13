import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TagCloudModule } from '../../modules/tagcloud.module';

@NgModule({
    declarations: [
        AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, TagCloudModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


