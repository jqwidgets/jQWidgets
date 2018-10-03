/// <reference path='components/jqwidgets.d.ts' />
import { Component, ViewChild, AfterViewInit, Input, Directive } from '@angular/core';

import { jqxGridComponent } from 'components/angular_jqxgrid';

@Component({
    selector: 'jqx-grid',
    template: `<angularGrid #reference></angularGrid>`
})

export class GridComponent implements AfterViewInit
{
    @ViewChild('reference') myGrid: jqxGridComponent;

    @Input() employeID: number = 1;
    @Input() quarter: number = 1;

    ngAfterViewInit(): void
    {
        this.myGrid.createWidget(this.settings);
    }

    //Refresh the grid when the employeID оr quarter is changed
    refreshGrid(): void
    {
        setTimeout(() =>
        {
            this.myGrid.updatebounddata('cells');
        }, 100)
    };

    //Grid Setup
    arrayOfGridOrdersData = [];

    sourceGrid = {
        datatype: 'json',
        datafields: [
            { name: 'ShippedDate', type: 'date' },
            { name: 'ShipAddress' },
            { name: 'Customer', type: 'string' },
            { name: 'Amount', type: 'number' }
        ],
        beforeprocessing: (data) =>
        {
            if (data)
            {
                for (let item in data)
                {
                    this.arrayOfGridOrdersData[item] = data[item];
                }
            }
        },
        updaterow: (rowid, rowdata, commit) =>
        {
            commit(true);
        },
        url: '../personalsales/data.php'
    };

    dataAdapter = new $.jqx.dataAdapter(this.sourceGrid, {
        formatData: (data) =>
        {
            $.extend(data, {
                employeeid: this.employeID,
                month: this.quarter,
                usedwidget: 'salesgrid'
            });
            return data;
        },
        autoBind: true
    });

    settings: jqwidgets.GridOptions = {
        width: '100%',
        theme: 'light',
        autoheight: true,
        clipboard: false,
        altrows: true,
        rowsheight: 35,
        pagermode: 'simple',
        ready: () =>
        {
            let localizationobj = { thousandsseparator: '' };
            this.myGrid.localizestrings(localizationobj);
        },
        source: this.dataAdapter,
        columns: [
            {
                text: 'Date',
                datafield: 'ShippedDate',
                width: '15%',
                cellsformat: 'MMM dd yyyy',
                cellsalign: 'center'
            },
            {
                width: '35%',
                text: 'Ship Address',
                datafield: 'ShipAddress',
                cellsalign: 'center'
            },
            {
                width: '15%',
                text: 'Customer',
                datafield: 'Customer',
                cellsalign: 'center'
            },
            {
                width: '35%',
                text: 'Amount',
                datafield: 'Amount',
                cellsformat: 'c2',
                cellsalign: 'right'
            }
        ]
    } 
}
