import { Component, ViewChild } from '@angular/core';

import { jqxRangeSelectorComponent } from 'jqwidgets-ng/jqxrangeselector';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('rangeSelectorReference', { static: false }) myRangeSelector: jqxRangeSelectorComponent;

	getWidth() : any {
		if (document.body.offsetWidth < 700) {
			return '90%';
		}
		
		return 700;
	}
	
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