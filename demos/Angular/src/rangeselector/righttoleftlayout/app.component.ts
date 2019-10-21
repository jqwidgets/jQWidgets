import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxRangeSelectorComponent } from 'jqwidgets-ng/jqxrangeselector';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('rangeSelector', { static: false }) rangeSelector: jqxRangeSelectorComponent;
	
	getWidth() : any {
		if (document.body.offsetWidth < 750) {
			return '90%';
		}
		
		return 750;
	}
	
    ngAfterViewInit() {
        this.rangeSelector.setRange(30, 60);
    }
}