 
import { Component, ViewChild } from '@angular/core';

import { jqxRangeSelectorComponent } from '../../../../../jqwidgets-ts/angular_jqxrangeselector';
import { jqxButtonComponent } from '../../../../../jqwidgets-ts/angular_jqxbuttons';

@Component({
    selector: 'my-app',
    templateUrl: '../app/rangeselector/defaultfunctionality/app.component.htm'
})

export class AppComponent
{
    @ViewChild('rangeSelectorReference') myRangeSelector: jqxRangeSelectorComponent;

    onClickGet(): void
    {
        let range = this.myRangeSelector.getRange();
        alert("The selected range is from " + range.from + " to " + range.to);
    }

    onClickSet(): void
    {
        this.myRangeSelector.setRange(30, 70);
    }
}