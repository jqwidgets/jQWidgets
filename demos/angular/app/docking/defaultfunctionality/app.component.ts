 
import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { jqxDockingComponent } from '../../../../../jqwidgets-ts/angular_jqxdocking';
import { jqxCalendarComponent } from '../../../../../jqwidgets-ts/angular_jqxcalendar';
import { jqxTabsComponent } from '../../../../../jqwidgets-ts/angular_jqxtabs';
import { jqxListBoxComponent } from '../../../../../jqwidgets-ts/angular_jqxlistbox';
import { jqxPanelComponent } from '../../../../../jqwidgets-ts/angular_jqxpanel';

@Component({
    selector: 'my-app',
    templateUrl: `../app/docking/defaultfunctionality/app.component.htm`
})

export class AppComponent implements AfterViewInit
{ 
    @ViewChild('dockingReference') myDocking: jqxDockingComponent;

    ngAfterViewInit(): void
    {
        setTimeout(() =>
        {
            this.myDocking.disableWindowResize('window1');
            this.myDocking.disableWindowResize('window2');
            this.myDocking.disableWindowResize('window3');
            this.myDocking.disableWindowResize('window4');
        });
    }   

    source: string[] =
    [
        'JavaScript Certification - Welcome to our network',
        'Business Challenges via Web take a part',
        'jQWidgets better web, less time. Take a tour',
        'Facebook - you have 7 new notifications',
        'Twitter - John Doe is following you. Look at his profile',
        'New videos, take a look at YouTube.com'
    ];
}
