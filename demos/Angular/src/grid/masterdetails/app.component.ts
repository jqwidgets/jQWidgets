import { Component, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('customersGrid', { static: false }) customersGrid: jqxGridComponent;
    @ViewChild('ordersGrid', { static: false }) ordersGrid: jqxGridComponent;

    source: any =
    {
        datafields: [
            { name: 'CustomerID' },
            { name: 'CompanyName' },
            { name: 'ContactName' },
            { name: 'ContactTitle' },
            { name: 'Address' },
            { name: 'City' },
            { name: 'Country' }
        ],
        localdata:
        [
            { 'CustomerID': 'AAA', 'CompanyName': 'Alfreds Futterkiste', 'ContactName': 'Maria Anders', 'ContactTitle': 'Sales Representative', 'City': 'Berlin', 'Country': 'Germany' },
            { 'CustomerID': 'BBB', 'CompanyName': 'Trujillo Emparedados', 'ContactName': 'Gerry Trujillo', 'ContactTitle': 'Owner', 'City': 'Paris', 'Country': 'France' },
            { 'CustomerID': 'CCC', 'CompanyName': 'Moreno Taquera', 'ContactName': 'Antonio Moreno', 'ContactTitle': 'Manager', 'City': 'Mxico D.F.', 'Country': 'Mexico' }
        ]
    }

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] =
    [
        { text: 'Company Name', datafield: 'CompanyName', width: 250 },
        { text: 'Contact Name', datafield: 'ContactName', width: 150 },
        { text: 'Contact Title', datafield: 'ContactTitle', width: 180 },
        { text: 'City', datafield: 'City', width: 120 },
        { text: 'Country', datafield: 'Country' }
    ];

    dataFields2: any[] =
    [
        { name: 'CustomerID' },
        { name: 'OrderID' },
        { name: 'OrderDate', type: 'date' },
        { name: 'ShippedDate', type: 'date' },
        { name: 'ShipName' },
        { name: 'ShipCountry' }
    ];

    source2: any =
    {
        datafields: this.dataFields2,
        localdata:
        [
            { 'OrderID': 10248, 'CustomerID': 'AAA', 'OrderDate': '1996-07-04 00:00:00', 'ShippedDate': '1996-07-16 00:00:00', 'ShipName': 'Vins et alcools Chevalier' },
            { 'OrderID': 10249, 'CustomerID': 'AAA', 'OrderDate': '1996-07-05 00:00:00', 'ShippedDate': '1996-07-17 00:00:00', 'ShipName': 'Toms Spezialitten' },
            { 'OrderID': 10250, 'CustomerID': 'AAA', 'OrderDate': '1996-07-06 00:00:00', 'ShippedDate': '1996-07-18 00:00:00', 'ShipName': 'Hanari Carnes' },
            { 'OrderID': 10251, 'CustomerID': 'BBB', 'OrderDate': '1996-07-07 00:00:00', 'ShippedDate': '1996-07-19 00:00:00', 'ShipName': 'Lady Of Seas' },
            { 'OrderID': 10252, 'CustomerID': 'BBB', 'OrderDate': '1996-07-08 00:00:00', 'ShippedDate': '1996-07-20 00:00:00', 'ShipName': 'Queen Victoria' },
            { 'OrderID': 10253, 'CustomerID': 'BBB', 'OrderDate': '1996-07-09 00:00:00', 'ShippedDate': '1996-07-21 00:00:00', 'ShipName': 'Poseidon' },
            { 'OrderID': 10254, 'CustomerID': 'CCC', 'OrderDate': '1996-07-10 00:00:00', 'ShippedDate': '1996-07-22 00:00:00', 'ShipName': 'Wreckno' },
            { 'OrderID': 10255, 'CustomerID': 'CCC', 'OrderDate': '1996-07-11 00:00:00', 'ShippedDate': '1996-07-23 00:00:00', 'ShipName': 'Flash' },
            { 'OrderID': 10256, 'CustomerID': 'CCC', 'OrderDate': '1996-07-12 00:00:00', 'ShippedDate': '1996-07-24 00:00:00', 'ShipName': 'Titan' }
        ]
    }

    dataAdapter2: any = new jqx.dataAdapter(this.source2, { autoBind: true } );

    columns2: any[] =
    [
        { text: 'OrderID', datafield: 'OrderID', width: 100 },
        { text: 'OrderDate', datafield: 'OrderDate', cellsformat: 'd', width: 150 },
        { text: 'Shipped Date', datafield: 'ShippedDate', cellsformat: 'd', width: 150 },
        { text: 'Ship Name', datafield: 'ShipName' }
    ];

    customersGridOnRowSelect(event: any): void {
        let customerID = event.args.row.CustomerID;
        let records = new Array();
        let dataAdapter = this.dataAdapter2;
        let length = dataAdapter.records.length;

        for (let i = 0; i < length; i++) {
            let record = dataAdapter.records[i];
            if (record.CustomerID == customerID) {
                records[records.length] = record;
            }
        }
        let dataSource = {
            datafields: this.dataFields2,
            localdata: records
        }

        let adapter = new jqx.dataAdapter(dataSource);


        this.ordersGrid.source(adapter);
    };
}