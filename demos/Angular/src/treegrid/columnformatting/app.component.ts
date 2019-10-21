import { Component, ViewChild } from '@angular/core';

import { jqxTreeGridComponent } from 'jqwidgets-ng/jqxtreegrid';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

import { generateordersdata } from './../../../sampledata/generatedata';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myTreeGrid', { static: false }) myTreeGrid: jqxTreeGridComponent;

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}


     source: any =
        {
           dataType: 'array',
           dataFields: [
               { name: 'name', type: 'string' },
               { name: 'quantity', type: 'number' },
               { name: 'id', type: 'number' },
               { name: 'parentid', type: 'number' },
               { name: 'price', type: 'number' },
               { name: 'date', type: 'date' },
               { name: 'customer', type: 'string' }
           ],
           hierarchy:
           {
               keyDataField: { name: 'id' },
               parentDataField: { name: 'parentid' }
           },
           id: 'id',
           localData: generateordersdata(200)
        };

     dataAdapter: any = new jqx.dataAdapter(this.source);

     columns: any[] =
     [
         { text: 'Order Name', dataField: 'name', align: 'center', width: 200 },
         { text: 'Customer', dataField: 'customer', align: 'center', width: 200 },
         { text: 'Price', dataField: 'price', cellsFormat: 'c2', align: 'center', cellsAlign: 'right', width: 100 },
         { text: 'Order Date', dataField: 'date', align: 'right', cellsFormat: 'd', cellsAlign: 'right' }
     ];

     columnGroups: any[] = [{ text: 'JST Corp.', name: 'JSTCorp', align: 'center' }];

     ready = (): void => {
         this.myTreeGrid.expandRow(2);
     };

     dateSource: string[] = ['Short Date', 'Long Date', 'Long date, Short Time', 'Long date, Long Time', 'Month/Year', 'Month/Day', 'Custom'];

     priceSource: string[] = ['n', 'f1', 'f2', 'f3', 'c1', 'c2', 'c3', 'p', 'p2', 'p3'];

     dateListOnChange(event: any): void {
        let index = event.args.index;
        switch (index) {
            case 0:
                this.myTreeGrid.setColumnProperty('date', 'cellsFormat', 'd');
                break;
            case 1:
                this.myTreeGrid.setColumnProperty('date', 'cellsFormat', 'D');
                break;
            case 2:
                this.myTreeGrid.setColumnProperty('date', 'cellsFormat', 'f');
                break;
            case 3:
                this.myTreeGrid.setColumnProperty('date', 'cellsFormat', 'F');
                break;
            case 4:
                this.myTreeGrid.setColumnProperty('date', 'cellsFormat', 'Y');
                break;
            case 5:
                this.myTreeGrid.setColumnProperty('date', 'cellsFormat', 'M');
                break;
            case 6:
                this.myTreeGrid.setColumnProperty('date', 'cellsFormat', 'yyyy-MM-dd HH:mm:ss');
                break;
        }
     };

     priceListOnChange(event: any): void {
        let index = event.args.index;
        switch (index) {
            case 0:
                this.myTreeGrid.setColumnProperty('price', 'cellsFormat', 'n');
                break;
            case 1:
                this.myTreeGrid.setColumnProperty('price', 'cellsFormat', 'f1');
                break;
            case 2:
                this.myTreeGrid.setColumnProperty('price', 'cellsFormat', 'f2');
                break;
            case 3:
                this.myTreeGrid.setColumnProperty('price', 'cellsFormat', 'f3');
                break;
            case 4:
                this.myTreeGrid.setColumnProperty('price', 'cellsFormat', 'c1');
                break;
            case 5:
                this.myTreeGrid.setColumnProperty('price', 'cellsFormat', 'c2');
                break;
            case 6:
                this.myTreeGrid.setColumnProperty('price', 'cellsFormat', 'c3');
                break;
            case 7:
                this.myTreeGrid.setColumnProperty('price', 'cellsFormat', 'p');
                break;
            case 8:
                this.myTreeGrid.setColumnProperty('price', 'cellsFormat', 'p2');
                break;
            case 9:
                this.myTreeGrid.setColumnProperty('price', 'cellsFormat', 'p3');
                break;
        }
     };
}