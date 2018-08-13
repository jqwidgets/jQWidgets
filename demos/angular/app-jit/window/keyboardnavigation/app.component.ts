import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';

import { jqxWindowComponent } from '../../../jqwidgets-ts/angular_jqxwindow';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('window') window: jqxWindowComponent;

    ngAfterViewInit(): void {
        this.window.focus();
    }

    showWindowButtonClick(): void {
        this.window.open();
    }
}
