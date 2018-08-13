import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TabsModule } from '../../modules/tabs.module';
import { ButtonModule } from '../../modules/button.module';
import { CheckBoxModule } from '../../modules/checkbox.module';
import { ListBoxModule } from '../../modules/listbox.module';

@NgModule({
    declarations: [
        AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, TabsModule, ButtonModule, CheckBoxModule, ListBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


