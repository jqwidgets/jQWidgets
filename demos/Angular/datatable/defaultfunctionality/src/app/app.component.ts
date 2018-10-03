import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    columns: any[] =
    [
        { text: 'First Name', dataField: 'First Name', width: 200 },
        { text: 'Last Name', dataField: 'Last Name', width: 200 },
        { text: 'Product', dataField: 'Product', width: 250 },
        { text: 'Unit Price', dataField: 'Price', width: 100, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
        { text: 'Quantity', dataField: 'Quantity', width: 100, align: 'right', cellsAlign: 'right', cellsFormat: 'n' }
    ];
}
