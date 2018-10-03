import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxSwitchButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxswitchbutton';

@NgModule({
    declarations: [AppComponent, jqxSwitchButtonComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        