import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxDockingComponent }  from '../../../../../jqwidgets-ts/angular_jqxdocking';
import { jqxCalendarComponent } from '../../../../../jqwidgets-ts/angular_jqxcalendar';
import { jqxTabsComponent }     from '../../../../../jqwidgets-ts/angular_jqxtabs';
import { jqxListBoxComponent }  from '../../../../../jqwidgets-ts/angular_jqxlistbox';
import { jqxPanelComponent }    from '../../../../../jqwidgets-ts/angular_jqxpanel';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxDockingComponent, jqxCalendarComponent, jqxTabsComponent, jqxListBoxComponent, jqxPanelComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

