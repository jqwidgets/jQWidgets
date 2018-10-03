import { Component, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'chartProduct',
	templateUrl: './app.component.html'
})

export class ChartProduct {
	constructor() {
		let test: any = 'Chart Product';
		console.log('chartProduct', test);
	}
}