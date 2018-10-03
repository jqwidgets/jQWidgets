import { Component } from '@angular/core';

@Component({
	selector: 'staffGrid',
	templateUrl: './app.component.html'
})

export class GridStaffComponent {
	constructor() {
		console.error('staff loaded!');
	}
}