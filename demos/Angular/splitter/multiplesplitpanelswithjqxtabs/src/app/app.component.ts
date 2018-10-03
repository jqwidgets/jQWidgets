import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxTabsComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtabs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('tabs1') tabs1: jqxTabsComponent;
    @ViewChild('tabs2') tabs2: jqxTabsComponent;
    @ViewChild('tabs3') tabs3: jqxTabsComponent;
	
	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}


    ngAfterViewInit() {
        this.tabs1.elementRef.nativeElement.firstChild.style.border = 'none';
        this.tabs2.elementRef.nativeElement.firstChild.style.border = 'none';
        this.tabs3.elementRef.nativeElement.firstChild.style.border = 'none';
    }
}