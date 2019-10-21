import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { jqxMenuComponent } from 'jqwidgets-ng/jqxmenu';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('jqxMenu', { static: false }) jqxMenu: jqxMenuComponent;
    @ViewChild('log', { static: false }) log: ElementRef;

    ngAfterViewInit() {
        this.jqxMenu.focus();
    }
	
	getWidth() : any {
		if (document.body.offsetWidth < 600) {
			return '90%';
		}
		
		return 600;
	}
	
    itemclick(event: any): void {
        this.log.nativeElement.innerHTML = "Clicked: " + event.args.innerText;
    };
}