import { Component, ViewChild } from '@angular/core';

import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('ordersComboBox', { static: false }) ordersComboBox: jqxComboBoxComponent;

    customersSource: any =
    {
        dataType: 'json',
        dataFields: [
            { name: 'CompanyName' },
            { name: 'CustomerID' }
        ],
        url: './../../../sampledata/customers.txt'
    };

    customersAdapter: any = new jqx.dataAdapter(this.customersSource);

    ordersSource: any =
    {
        dataType: 'json',
        dataFields: [
            { name: 'CustomerID' },
            { name: 'OrderID' },
            { name: 'ShipCity' },
            { name: 'OrderDate' },
            { name: 'ShipName' },
            { name: 'ShipCountry' },
            { name: 'ShipAddress' }
        ],
        url: './../../../sampledata/orders.txt'
    };

    ordersAdapter: any = new jqx.dataAdapter(this.ordersSource);

    customersOnSelect(event: any): void {
        if (event.args) {
            this.ordersComboBox.setOptions({ disabled: false, selectedIndex: -1 });
            let value = event.args.item.value;
            let ordersSource = this.ordersComboBox.source()._source;
            ordersSource.data = { CustomerID: value };
            let ordersAdapter = new jqx.dataAdapter(ordersSource, {
                beforeLoadComplete: (records: any[]): any[] => {
                    let filteredRecords = new Array();
                    for (let i = 0; i < records.length; i++) {
                        if (records[i].CustomerID == value)
                            filteredRecords.push(records[i]);
                    }
                    return filteredRecords;
                }
            });
            this.ordersComboBox.setOptions({ source: ordersAdapter, autoDropDownHeight: ordersAdapter.records.length > 10 ? false : true });
        }
    };

    ordersOnSelect(event: any): void {
        if (event.args) {
            let index = this.ordersComboBox.selectedIndex();
            if (index !== -1) {
                let record = this.ordersAdapter.records[index];
                let detailsSource =
                    {
                        dataType: 'json',
                        dataFields: [
                            { name: 'CustomerID' },
                            { name: 'OrderID' },
                            { name: 'ShipCity' },
                            { name: 'OrderDate' },
                            { name: 'ShipName' },
                            { name: 'ShipCountry' },
                            { name: 'ShipAddress' }
                        ],
                        localData: record
                    };
                let detailsAdapter = new jqx.dataAdapter(detailsSource);

                let options = {
                    source: detailsAdapter,
                    width: 500,
                    columns: [
                        { text: 'Order Date', dataField: 'OrderDate', cellsFormat: 'd' },
                        { text: 'Ship Country', dataField: 'ShipCountry' },
                        { text: 'Ship Address', dataField: 'ShipAddress' },
                        { text: 'Ship Name', dataField: 'ShipName' }
                    ]
                };

                jqwidgets.createInstance('#orderInfo', 'jqxDataTable', options);
            }
        }
    }
}
