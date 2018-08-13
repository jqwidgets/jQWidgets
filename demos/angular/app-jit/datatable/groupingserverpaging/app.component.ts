import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: any =
    {
        dataType: 'json',
        dataFields: [
            { name: 'ShipCountry', type: 'string' },
            { name: 'ShipCity', type: 'string' },
            { name: 'ShipAddress', type: 'string' },
            { name: 'ShipName', type: 'string' },
            { name: 'Freight', type: 'number' },
            { name: 'ShippedDate', type: 'date' }
        ],
        root: 'value',
        url: 'http://services.odata.org/V3/Northwind/Northwind.svc/Orders?$format=json&$callback=?'
    };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    dataAdapter: any = new jqx.dataAdapter(this.source,
        {
            formatData: (data: any): void => {
                if (this.source.totalRecords) {
                    // update the $skip and $top params of the OData service.
                    // data.pagenum - page number starting from 0.
                    // data.pagesize - page size
                    data.$skip = data.pagenum * data.pagesize;
                    data.$top = data.pagesize;
                    data.$orderby = 'ShipCountry asc';
                }
                return data;
            },
            downloadComplete: (data: any, status: any, xhr: any): void => {
                if (!this.source.totalRecords) {
                    this.source.totalRecords = data.value.length;
                }
            },
            loadError: (xhr: any, status: any, error: any): void => {
                throw new Error('http://services.odata.org: ' + error.toString());
            }
        }
    );

    columns: any[] =
    [
        { text: 'Ship Name', dataField: 'ShipName', width: 250 },
        { text: 'Ship Country', hidden: true, dataField: 'ShipCountry', width: 250 },
        { text: 'Ship City', dataField: 'ShipCity', width: 150 },
        { text: 'Ship Address', dataField: 'ShipAddress' }
    ];

    groupsRenderer = (value: string | number, rowData: any, level: any): string => {
        return 'Ship Country: ' + value;
    };
}

