import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxDockingComponent } from 'jqwidgets-ng/jqxdocking';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myDocking', { static: false }) myDocking; jqxDockingComponent;
	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
    ngAfterViewInit(): void {
        this.myDocking.showAllCollapseButtons();
        this.myDocking.focus();
    }
}
