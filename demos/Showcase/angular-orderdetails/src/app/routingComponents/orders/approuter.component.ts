import { Component } from '@angular/core';

@Component({
	selector: 'orderssel',
	templateUrl: './approuter.component.html'
})

export class OrdersComponent {
	constructor() {
		//console.error('Orders loaded!');
		console.log('%c Orders loaded! ', 'background: #212; color: #baea55');
	}
}