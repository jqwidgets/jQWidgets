import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxNavigationBarComponent } from '../../../jqwidgets-ts/angular_jqxnavigationbar';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('jqxNavigationBar') jqxNavigationBar: jqxNavigationBarComponent;

    ngAfterViewInit() {
        this.jqxNavigationBar.focus();
    }
}