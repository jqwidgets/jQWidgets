import { Component } from '@angular/core';

@Component({
	selector: 'productsGrid',
	templateUrl: './app.component.html'
})

export class GridProductsComponent {
	constructor() {
		console.error('products loaded!');
	}
}