import { Component } from '@angular/core';

// import { GridFoodComponent } from './innerComponents/dashboardComponent/app.component';

@Component({
	selector: 'dashboard',
	templateUrl: './approuter.component.html'
})

export class DashboardComponent {
	constructor() {
		console.error('DashboardComponent loaded!');
	}
}