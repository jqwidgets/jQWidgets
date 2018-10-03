import { Component, ViewChild, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
	//selector: 'customers', //TODO: it is not needed (because there is no item to create)
	templateUrl: './approuter.component.html'
})

export class CustomersComponent implements AfterViewInit {
	//TODO: It can be deleted
	constructor() {}
	
	ngAfterViewInit() {
		console.log(1000 + ' ngAfterViewInit!')
	}
}