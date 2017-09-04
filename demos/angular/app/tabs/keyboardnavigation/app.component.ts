import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxTabsComponent } from '../../../jqwidgets-ts/angular_jqxtabs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('jqxTabs') jqxTabs: jqxTabsComponent;

    ngAfterViewInit() {
        this.jqxTabs.focus();
    }
}