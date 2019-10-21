import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    min: Date = new Date(2014, 5, 1, 0, 0, 0);
    max: Date = new Date(2014, 5, 1, 24, 0, 0);
    range: any = { from: new Date(2014, 5, 1, 4, 0, 0), to: new Date(2014, 5, 1, 12, 0, 0) };
    majorTicksInterval: any = { hours: 4 };
    minorTicksInterval: any = { minutes: 30 };
    labelsFormat: string = 'hh:mm tt';
    markersFormat: string = 'hh:mm tt';
	
	getWidth() : any {
		if (document.body.offsetWidth < 750) {
			return '90%';
		}
		
		return 750;
	}
}