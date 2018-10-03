import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxDockingComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdocking';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myDocking') myDocking; jqxDockingComponent;
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
