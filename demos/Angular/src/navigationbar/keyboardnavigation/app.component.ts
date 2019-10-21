import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxNavigationBarComponent } from 'jqwidgets-ng/jqxnavigationbar';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('jqxNavigationBar', { static: false }) jqxNavigationBar: jqxNavigationBarComponent;

    ngAfterViewInit() {
        this.jqxNavigationBar.focus();
    }
}