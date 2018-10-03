import { Component, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'chartGeneral',
	templateUrl: './app.component.html'
})

export class ChartGeneral {
	constructor() {
		let test: any = 'Chart General';
		console.log('chartGeneral', test);
	}
}