import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxinput';
import { jqxNumberInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxnumberinput';

@NgModule({
    declarations: [AppComponent, jqxInputComponent, jqxNumberInputComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        