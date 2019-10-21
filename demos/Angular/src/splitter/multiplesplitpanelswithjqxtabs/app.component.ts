import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxTabsComponent } from 'jqwidgets-ng/jqxtabs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('tabs1', { static: false }) tabs1: jqxTabsComponent;
    @ViewChild('tabs2', { static: false }) tabs2: jqxTabsComponent;
    @ViewChild('tabs3', { static: false }) tabs3: jqxTabsComponent;
	
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