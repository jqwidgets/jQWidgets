import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { jqxSplitterModule } from 'jqwidgets-ng/jqxsplitter';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, FormsModule, 
		jqxSplitterModule, jqxButtonModule, jqxGridModule, jqxInputModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


