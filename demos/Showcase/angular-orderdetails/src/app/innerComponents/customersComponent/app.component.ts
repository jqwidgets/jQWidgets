import { Component, ViewChild, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
	selector: 'gridCustomers',
	templateUrl: './app.component.html'
})

export class GridCustomersComponent implements AfterViewInit {
	ngAfterViewInit() {
		console.log(1001 + ' ngAfterViewInit! gridCustomers')
	}
}