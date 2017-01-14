 
import { Component, ViewChild } from '@angular/core';

import { jqxGridComponent } from '../../../../../jqwidgets-ts/angular_jqxgrid';

@Component({
    selector: 'my-app',
    template: 
        `<jqxGrid #gridReference
            [width]='850' [height]='365' [source]='employeesAdapter'
            [rowdetails]='true' [rowsheight]='35' [initrowdetails]='initRowDetails'   
            [ready]='ready' [columns]='columns' [rowdetailstemplate]='rowdetailstemplate'>
        </jqxGrid>`
})

export class AppComponent
{
    @ViewChild('gridReference') myGrid: jqxGridComponent;  

    source: any =
    {
        datafields: [
            { name: 'FirstName' },
            { name: 'LastName' },
            { name: 'Title' },
            { name: 'Address' },
            { name: 'City' }
        ],
        root: "Employees",
        record: "Employee",
        id: 'EmployeeID',
        datatype: "xml",
        async: false,
        url: "../../sampledata/employees.xml"
    };

    employeesAdapter: any = new $.jqx.dataAdapter(this.source);

    ordersSource: any =
    {
        datafields: [
            { name: 'EmployeeID', type: 'string' },
            { name: 'ShipName', type: 'string' },
            { name: 'ShipAddress', type: 'string' },
            { name: 'ShipCity', type: 'string' },
            { name: 'ShipCountry', type: 'string' },
            { name: 'ShippedDate', type: 'date' }
        ],
        root: "Orders",
        record: "Order",
        datatype: "xml",
        url: "../../sampledata/orderdetails.xml",
        async: false
    };

    ordersDataAdapter = new $.jqx.dataAdapter(this.ordersSource, { autoBind: true });

    orders: any[] = this.ordersDataAdapter.records;

    nestedGrids: any[] = new Array();

    // create nested grid.
    initRowDetails: any = (index: number, parentElement: any, gridElement: any, record: any): void => 
    {
        let id = record.uid.toString();
        let grid = $($(parentElement).children()[0]);
        this.nestedGrids[index] = grid;
        let filtergroup = new $.jqx.filter();
        let filter_or_operator = 1;
        let filtervalue = id;
        let filtercondition = 'equal';
        let filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        // fill the orders depending on the id.
        let ordersbyid = [];
        for (let m = 0; m < this.orders.length; m++)
        {
            let result = filter.evaluate(this.orders[m]["EmployeeID"]);
            if (result)
                ordersbyid.push(this.orders[m]);
        }
        let orderssource = {
            datafields: [
                { name: 'EmployeeID', type: 'string' },
                { name: 'ShipName', type: 'string' },
                { name: 'ShipAddress', type: 'string' },
                { name: 'ShipCity', type: 'string' },
                { name: 'ShipCountry', type: 'string' },
                { name: 'ShippedDate', type: 'date' }
            ],
            id: 'OrderID',
            localdata: ordersbyid
        }
        let nestedGridAdapter = new $.jqx.dataAdapter(orderssource);
        if (grid != null)
        {
            grid.jqxGrid({
                source: nestedGridAdapter, width: 780, height: 200,
                columns: [
                    { text: 'Ship Name', datafield: 'ShipName', width: 200 },
                    { text: 'Ship Address', datafield: 'ShipAddress', width: 200 },
                    { text: 'Ship City', datafield: 'ShipCity', width: 150 },
                    { text: 'Ship Country', datafield: 'ShipCountry', width: 150 },
                    { text: 'Shipped Date', datafield: 'ShippedDate', width: 200 }
                ]
            });
        }
    }

    photoRenderer = (row: number, column: any, value: string): string =>
    {
        let name = this.myGrid.getrowdata(row).FirstName;
        let imgurl = '../../images/' + name.toLowerCase() + '.png';
        let img = '<div style="background: white;"><img style="margin:2px; margin-left: 10px;" width="32" height="32" src="' + imgurl + '"></div>';
        return img;
    }

    renderer = (row: number, column: any, value: string): string =>
    {
        return '<span style="margin-left: 4px; margin-top: 9px; float: left;">' + value + '</span>';
    }
        
    rowdetailstemplate: any = { rowdetails: "<div id='grid' style='margin: 10px;'></div>", rowdetailsheight: 220, rowdetailshidden: true };

    ready: any =  () =>
    {
        this.myGrid.showrowdetails(1);
    };

    columns: any[] =
    [
        { text: 'Photo', width: 50, cellsrenderer: this.photoRenderer },
        { text: 'First Name', datafield: 'FirstName', width: 100, cellsrenderer: this.renderer },
        { text: 'Last Name', datafield: 'LastName', width: 100, cellsrenderer: this.renderer },
        { text: 'Title', datafield: 'Title', width: 180, cellsrenderer: this.renderer },
        { text: 'Address', datafield: 'Address', width: 300, cellsrenderer: this.renderer },
        { text: 'City', datafield: 'City', width: 170, cellsrenderer: this.renderer }
    ];
}