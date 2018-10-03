import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxProgressBarComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxprogressbar';
import { jqxRepeatButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxrepeatbutton';

@NgModule({
    declarations: [AppComponent, jqxProgressBarComponent, jqxRepeatButtonComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        