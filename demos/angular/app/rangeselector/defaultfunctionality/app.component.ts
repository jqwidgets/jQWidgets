import { Component, ViewChild } from '@angular/core';

import { jqxRangeSelectorComponent } from '../../../jqwidgets-ts/angular_jqxrangeselector';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('rangeSelectorReference') myRangeSelector: jqxRangeSelectorComponent;

    onClickGet(): void {
        // Get Range.
        let range = this.myRangeSelector.getRange();
        alert("The selected range is from " + range.from + " to " + range.to);
    };

    onClickSet(): void {
        // Set Range.
        this.myRangeSelector.setRange(30, 70);
    };
}