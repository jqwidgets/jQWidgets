import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComboBoxModule } from '../../modules/combobox.module';
import { DataTableModule } from '../../modules/datatable.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, FormsModule, ComboBoxModule, DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


