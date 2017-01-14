/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" /> 
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxDataTableComponent } from '../../../../../jqwidgets-ts/angular_jqxdatatable';

@Component({
    selector: 'my-app',
    templateUrl: '../app/datatable/createComponent/app.component.htm'
}) 

export class AppComponent implements AfterViewInit
{ 
    @ViewChild('dataTableReference') myDataTable: jqxDataTableComponent;

    ngAfterViewInit(): void
    {
        this.myDataTable.createComponent(this.settings);
    } 

    settings: jqwidgets.DataTableOptions =
    {
        altRows: true,
        sortable: true,
        editable: true,
        selectionMode: 'singleRow',
        columns: [
            { text: 'First Name', dataField: 'First Name', width: 200 },
            { text: 'Last Name', dataField: 'Last Name', width: 200 },
            { text: 'Product', dataField: 'Product', width: 250 },
            { text: 'Unit Price', dataField: 'Price', width: 100, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
            { text: 'Quantity', dataField: 'Quantity', width: 100, align: 'right', cellsAlign: 'right', cellsFormat: 'n' }
        ]
    }       
}
