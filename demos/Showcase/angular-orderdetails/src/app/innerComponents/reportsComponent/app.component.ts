import { Component } from '@angular/core';

@Component({
	selector: 'reportsPanel',
	templateUrl: './app.component.html'
})

export class PanelReportsComponent {
	constructor() {
		console.error('reports loaded!');
	}
}