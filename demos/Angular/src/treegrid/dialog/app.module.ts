import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { jqxTreeGridModule } from 'jqwidgets-ng/jqxtreegrid';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule,FormsModule, jqxTreeGridModule, 
	  jqxButtonModule, jqxDateTimeInputModule, jqxInputModule, jqxWindowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


