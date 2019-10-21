import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('log', { static: false }) myLog: ElementRef;

    source: any =
    {
        dataFields: [
            { name: 'OrderID', type: 'int' },
            { name: 'Freight', type: 'float' },
            { name: 'ShipName', type: 'string' },
            { name: 'ShipAddress', type: 'string' },
            { name: 'ShipCity', type: 'string' },
            { name: 'ShipCountry', type: 'string' },
            { name: 'ShippedDate', type: 'date' }
        ],
        root: 'Orders',
        record: 'Order',
        dataType: 'xml',
        id: 'OrderID',
        url: './../../../sampledata/orderdetails.xml'
    };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] =
    [
        { text: 'Freight', dataField: 'Freight', cellsFormat: 'f', cellsAlign: 'right', align: 'right', width: 250 },
        { text: 'Ship Country', dataField: 'ShipCountry', width: 250 },
        { text: 'Shipped Date', dataField: 'ShippedDate', cellsAlign: 'right', align: 'right', cellsFormat: 'dd/MM/yyyy' }
    ];

    editSettings: any =
    {
        saveOnPageChange: true, saveOnBlur: true, saveOnSelectionChange: true, cancelOnEsc: true,
        saveOnEnter: true, editSingleCell: true, editOnDoubleClick: true, editOnF2: true
    };

    onCellBeginEdit(event: any): void {
        let args = event.args;
        // row key
        let rowKey = args.key;
        // row's index.
        let rowIndex = args.index;
        // row's data.
        let rowData = args.row;
        // row's index in the data source.
        let rowBoundIndex = args.boundIndex;
        // column's data field.
        let columnDataField = args.dataField;
        // column's display field.
        let columnDisplayField = args.displayField;
        // cell's value.
        let value = args.value;
        if (columnDataField == 'ShippedDate' && value) {
            value = value.getDate() + '/' + (parseInt(value.getMonth()) + 1) + '/' + value.getFullYear();
        }
        let log = this.myLog.nativeElement;
        log.innerHTML = 'cellBeginEdit - Row: ' + rowIndex + ', Column: ' + columnDataField + ', Value: ' + value + ' <br />' + log.innerHTML;
    }

    onCellEndEdit(event: any): void {
        let args = event.args;
        // row key
        let rowKey = args.key;
        // row's index.
        let rowIndex = args.index;
        // row's data.
        let rowData = args.row;
        // row's index in the data source.
        let rowBoundIndex = args.boundIndex;
        // column's data field.
        let columnDataField = args.dataField;
        // column's display field.
        let columnDisplayField = args.displayField;
        // cell's value.
        let value = args.value;
        if (columnDataField == 'ShippedDate' && value) {
            value = value.getDate() + '/' + (parseInt(value.getMonth()) + 1) + '/' + value.getFullYear();
        }
        let log = this.myLog.nativeElement;
        log.innerHTML = '<br/>cellEndEdit - Row: ' + rowIndex + ', Column: ' + columnDataField + ', Value: ' + value + '<br/>' + log.innerHTML;
    }
}
