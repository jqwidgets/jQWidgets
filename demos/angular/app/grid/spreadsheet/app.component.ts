import { Component, ViewChild, OnInit } from '@angular/core';

import { jqxGridComponent } from '../../../jqwidgets-ts/angular_jqxgrid'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
    @ViewChild('myGrid') myGrid: jqxGridComponent;

    ngOnInit(): void {
        this.generateData();
    }

    columns: any[] = [];
    datafields: any[] = [];

    source: any =
    {
        unboundmode: true,
        totalrecords: 100,
        datafields: this.datafields
    }

    dataAdapter: any = new jqx.dataAdapter(this.source);

    numberrenderer = (row: number, column: any, value: any): string => {
        return '<div style="text-align: center; margin-top: 5px;">' + (1 + value) + '</div>';
    }

    generateData(): void {
        for (let i = 0; i < 26; i++) {
            let text = String.fromCharCode(65 + i);
            if (i == 0) {
                let cssclass = 'jqx-widget-header';
                this.columns[this.columns.length] = { pinned: true, exportable: false, text: '', columntype: 'number', cellclassname: cssclass, cellsrenderer: this.numberrenderer };
            }
            this.datafields[this.datafields.length] = { name: text };
            this.columns[this.columns.length] = { text: text, datafield: text, width: 60, align: 'center' };
        }
    }

    myBtnOnClick(): void {
        this.myGrid.exportdata('xls', 'jqxGrid', false);
    };
}