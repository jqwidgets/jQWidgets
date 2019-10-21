import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxPanelComponent } from 'jqwidgets-ng/jqxpanel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('events', { static: false }) events: jqxPanelComponent;

    ngAfterViewInit() {
        this.events.elementRef.nativeElement.firstChild.style.border = 'none';
    }
	
	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}


    panels: any[] = [{ size: 200 }];

    capitaliseFirstLetter = (string): string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    displayEvent = (event): void => {
        let eventData = "Event:" + this.capitaliseFirstLetter(event.type);
        eventData += ", Panel 1: " + event.args.panels[0].size;
        eventData += ", Panel 2: " + event.args.panels[1].size;
        this.events.prepend('<div class="item" style="margin-top: 5px;">' + eventData + '</div>');
    };

    resize(event: any): void {
        this.displayEvent(event);
    };

    expanded(event: any): void {
        this.displayEvent(event);
    };

    collapsed(event: any): void {
        this.displayEvent(event);
    };
}