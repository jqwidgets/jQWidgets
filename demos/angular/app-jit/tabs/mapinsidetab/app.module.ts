import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TabsModule } from '../../modules/tabs.module';

@NgModule({
  declarations: [
	AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, TabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


