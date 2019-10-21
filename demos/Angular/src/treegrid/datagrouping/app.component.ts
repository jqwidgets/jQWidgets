import { Component, ViewChild } from '@angular/core';

import { jqxTreeGridComponent } from 'jqwidgets-ng/jqxtreegrid';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('TreeGrid', { static: false }) treeGrid: jqxTreeGridComponent;

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}


    source: any =
    {
        datatype: 'xml',
        datafields: [
            { name: 'CompanyName', map: 'm\\:properties>d\\:CompanyName' },
            { name: 'ContactName', map: 'm\\:properties>d\\:ContactName' },
            { name: 'ContactTitle', map: 'm\\:properties>d\\:ContactTitle' },
            { name: 'City', map: 'm\\:properties>d\\:City' },
            { name: 'PostalCode', map: 'm\\:properties>d\\:PostalCode' },
            { name: 'Country', map: 'm\\:properties>d\\:Country' }
        ],
        hierarchy:
        {
            groupingDataFields:
            [
                {
                    name: 'Country'
                }
            ]
        },
        root: 'entry',
        record: 'content',
        id: { name: 'CustomerID', map: 'm\\:properties>d\\:CustomerID' },
        url: './../../../sampledata/customers.xml'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    icons(rowKey: number | string, rowData: any): string | boolean {
        let level = rowData.level;
        if (level == 0) {
            // each group row has a label member that contains the information displayed on the group row.
            let country = rowData.label;
            return './../../../images/' + $.trim(country.toLowerCase()) + '.png';
        }
        return false;
    }

    columns: any[] = [
        { text: 'City', dataField: 'City', width: 250 },
        { text: 'Company Name', dataField: 'CompanyName', minWidth: 100, width: 200 },
        { text: 'Contact Name', dataField: 'ContactName', width: 150 },
        { text: 'Contact Title', dataField: 'ContactTitle', width: 300 },
        { text: 'Postal Code', dataField: 'PostalCode', width: 120 }
    ];

    ready(): void {
        this.treeGrid.expandRow(0);
    };
}