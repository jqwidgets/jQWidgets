import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxDockingComponent } from 'jqwidgets-ng/jqxdocking';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myDocking', { static: false }) myDocking; jqxDockingComponent;

	getWidth() : any {
		if (document.body.offsetWidth < 650) {
			return '90%';
		}
		
		return 650;
	}

    ngAfterViewInit(): void {
        this.myDocking.importLayout('{"panel0": {"window0":{"collapsed":false}},"panel1": {"window1":{"collapsed":false}},"floating":{"window2":{"x":"200px","y":"400","width":"350px","height":"auto","collapsed":false}},"orientation": "horizontal"}');
    }

    source: string[] = [
        'JavaScript Certification - Welcome to our network',
        'Business Challenges via Web take a part',
        'jQWidgets better web, less time. Take a tour',
        'Facebook - you have 7 new notifications',
        'Twitter - John Doe is following you. Look at his profile',
        'New videos, take a look at YouTube.com'
    ];
}
