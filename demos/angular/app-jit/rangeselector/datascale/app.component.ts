import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    min: Date = new Date(2014, 0, 1);
    max: Date = new Date(2014, 11, 31);
    range: any = { from: new Date(2014, 3, 15), to: new Date(2014, 7, 29) };
	getWidth() : any {
		if (document.body.offsetWidth < 700) {
			return '90%';
		}
		
		return 700;
	}
	
}