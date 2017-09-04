import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxRangeSelectorComponent } from '../../../jqwidgets-ts/angular_jqxrangeselector';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('rangeSelector') rangeSelector: jqxRangeSelectorComponent;

    ngAfterViewInit() {
        this.rangeSelector.setRange(30, 60);
    }
}