import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
 	getWidth() : any {
		if (document.body.offsetWidth < 500) {
			return '90%';
		}
		
		return 500;
	}
}