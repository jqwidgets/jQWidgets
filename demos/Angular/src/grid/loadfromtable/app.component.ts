import { Component, ViewChild, ElementRef } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;
    @ViewChild('myTable', { static: false }) myTable: ElementRef;

    generateData(): any[] {
        let table = this.myTable.nativeElement;
        let columns = table.children[0].getElementsByTagName('th');
        let rows = table.children[1].getElementsByTagName('tr');
        
        let data = [];

        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];
            let datarow = {};
            for (let j = 0; j < columns.length; j++) {
                // Get column's title.
                let columnName = columns[j].innerHTML;
                // Get cell.
                let cell = rows[i].children[j].innerHTML;
                datarow[columnName] = cell;
            }
            data[data.length] = datarow;
        }

        return data;
    }

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    loadBtn(): void {
        let source =
            {
                localdata: this.generateData(),
                datatype: 'array',
                datafields:
                [
                    { name: 'First Name', type: 'string' },
                    { name: 'Last Name', type: 'string' },
                    { name: 'Product', type: 'string' },
                    { name: 'Available', type: 'string' },
                    { name: 'Ship Date', type: 'date', format: 'MM/dd/yyyy' },
                    { name: 'Quantity', type: 'number' },
                    { name: 'Price', type: 'number' }
                ]
            };

        let dataAdapter = new jqx.dataAdapter(source);

        let settings = {
            width: 850,
            source: dataAdapter,
            columnsresize: true,
            autoheight: true,
            sortable: true,
            columns: [
                { text: 'First Name', dataField: 'First Name', align: 'center', width: 130 },
                { text: 'Last Name', dataField: 'Last Name', align: 'center', width: 130 },
                { text: 'Product', dataField: 'Product', align: 'center', width: 170 },
                { text: 'Available', dataField: 'Available', columntype: 'checkbox', align: 'center', width: 90 },
                { text: 'Ship Date', dataField: 'Ship Date', align: 'center', cellsformat: 'd', width: 100 },
                { text: 'Quantity', dataField: 'Quantity', align: 'center', cellsalign: 'right', width: 100 },
                { text: 'Price', dataField: 'Price', align: 'right', cellsalign: 'right', cellsformat: "c2" }
            ]
        }

        this.myGrid.createComponent(settings);
    }
}