import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxTabsComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtabs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('jqxTabs') jqxTabs: jqxTabsComponent;

    ngAfterViewInit() {
        this.jqxTabs.focus();
    }
	
	getWidth() : any {
		if (document.body.offsetWidth < 600) {
			return '90%';
		}
		
		return 600;
	}
}