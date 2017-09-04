import { Component, ViewChild } from '@angular/core';

import { jqxGridComponent } from '../../../jqwidgets-ts/angular_jqxgrid'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myGrid') myGrid: jqxGridComponent;

    source: any =
    {
        datatype: 'json',
        datafields: [
            { name: 'name' },
            { name: 'type' },
            { name: 'calories', type: 'int' },
            { name: 'totalfat' },
            { name: 'protein' }
        ],
        id: 'id',
        url: '../sampledata/beverages.txt'
    }

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] =
    [
        { text: 'Name', datafield: 'name', width: 100, hidden: true },
        { text: 'Beverage Type', datafield: 'type' },
        { text: 'Calories', datafield: 'calories' },
        { text: 'Total Fat', datafield: 'totalfat' },
        { text: 'Protein', datafield: 'protein' }
    ];

    listBoxSource: any[] =
    [
        { label: 'Name', value: 'name', checked: false }, { label: 'Beverage Type', value: 'type', checked: true },
        { label: 'Calories', value: 'calories', checked: true }, { label: 'Total Fat', value: 'totalfat', checked: true },
        { label: 'Protein', value: 'protein', checked: true }
    ];

    myListBoxOnCheckChange(event: any): void {
        this.myGrid.beginupdate();
        if (event.args.checked) {
            this.myGrid.showcolumn(event.args.value);
        }
        else {
            this.myGrid.hidecolumn(event.args.value);
        }
        this.myGrid.endupdate();
    };
}