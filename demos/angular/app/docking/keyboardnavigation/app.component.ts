import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxDockingComponent } from '../../../jqwidgets-ts/angular_jqxdocking';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myDocking') myDocking; jqxDockingComponent;

    ngAfterViewInit(): void {
        this.myDocking.showAllCollapseButtons();
        this.myDocking.focus();
    }
}
