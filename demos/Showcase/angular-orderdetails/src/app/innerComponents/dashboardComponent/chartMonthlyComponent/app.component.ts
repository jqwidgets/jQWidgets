import { Component, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'chartMonthly',
	templateUrl: './app.component.html'
})

export class ChartMonthly {
	constructor() {
		let test: any = 'Chart Monthly';
		console.log('chartMonthly', test);
	}
}