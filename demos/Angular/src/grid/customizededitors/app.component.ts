import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: any =
    {
        datatype: 'xml',
        datafields: [
            { name: 'ShippedDate', map: 'm\\:properties>d\\:ShippedDate', type: 'date' },
            { name: 'Freight', map: 'm\\:properties>d\\:Freight', type: 'float' },
            { name: 'ShipName', map: 'm\\:properties>d\\:ShipName', type: 'string' },
            { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress', type: 'string' },
            { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity', type: 'string' },
            { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry', type: 'string' }
        ],
        root: 'entry',
        record: 'content',
        id: 'm\\:properties>d\\:OrderID',
        url: './../../../sampledata/orders.xml'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    columns: any[] =
    [
        {
            text: 'Ship City', datafield: 'ShipCity', width: 150, columntype: 'combobox',
            createeditor: (row: number, column: any, editor: any): void => {
                // assign a new data source to the combobox.
                let list = ['Stuttgart', 'Rio de Janeiro', 'Strasbourg'];
                editor.jqxComboBox({ autoDropDownHeight: true, source: list, promptText: 'Please Choose:' });
            },
            // update the editor's value before saving it.
            cellvaluechanging: (row: number, column: any, columntype: any, oldvalue: any, newvalue: any): any => {
                // return the old value, if the new value is empty.
                if (newvalue == '') return oldvalue;
            }
        },
        {
            text: 'Ship Country', datafield: 'ShipCountry', width: 150, columntype: 'dropdownlist',
            createeditor: (row: number, column: any, editor: any): void => {
                // assign a new data source to the dropdownlist.
                let list = ['Germany', 'Brazil', 'France'];
                editor.jqxDropDownList({ autoDropDownHeight: true, source: list });
            },
            // update the editor's value before saving it.
            cellvaluechanging: (row: number, column: any, columntype: any, oldvalue: any, newvalue: any): any => {
                // return the old value, if the new value is empty.
                if (newvalue == '') return oldvalue;
            }
        },
        { text: 'Ship Name', datafield: 'ShipName', columntype: 'combobox' }
    ];
}