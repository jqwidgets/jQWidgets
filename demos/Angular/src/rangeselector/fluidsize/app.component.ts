import { Component, ViewChild } from '@angular/core';

import { jqxRangeSelectorComponent } from 'jqwidgets-ng/jqxrangeselector';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('rangeSelectorReference', { static: false }) myRangeSelector: jqxRangeSelectorComponent;

    onClickGet(): void {
        let range = this.myRangeSelector.getRange();
        alert("The selected range is from " + range.from + " to " + range.to);
    };

    onClickSet(): void {
        this.myRangeSelector.setRange(30, 70);
    };
}