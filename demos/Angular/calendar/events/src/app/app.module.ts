import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxCalendarComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxcalendar';
import { jqxPanelComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxpanel';

@NgModule({
    declarations: [AppComponent, jqxCalendarComponent, jqxPanelComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        