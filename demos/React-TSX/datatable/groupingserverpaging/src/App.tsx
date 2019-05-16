import * as React from 'react';
 


import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

class App extends React.PureComponent<{}, IDataTableProps> {

    constructor(props: {}) {
        super(props);

        const source: any = {
            dataFields: [
                { name: 'ShipCountry', type: 'string' },
                { name: 'ShipCity', type: 'string' },
                { name: 'ShipAddress', type: 'string' },
                { name: 'ShipName', type: 'string' },
                { name: 'Freight', type: 'number' },
                { name: 'ShippedDate', type: 'date' }
            ],
            dataType: 'json',
            root: 'value',
            url: 'http://services.odata.org/V3/Northwind/Northwind.svc/Orders?$format=json&$callback=?'
        };

        const dataAdapter: any = new jqx.dataAdapter(source,
            {
                /* tslint:disable:no-string-literal */
                downloadComplete: (data: any, status: any, xhr: any): void => {
                    if (!source['totalRecords']) {
                        source['totalRecords'] = data.value.length;
                    }
                },
                formatData: (data: any): void => {
                    if (source['totalRecords']) {
                        // update the $skip and $top params of the OData service.
                        // data.pagenum - page number starting from 0.
                        // data.pagesize - page size
                        data.$skip = data.pagenum * data.pagesize;
                        data.$top = data.pagesize;
                        data.$orderby = 'ShipCountry asc';
                    }
                    return data;
                },           
                loadError: (xhr: any, status: any, error: any): void => {
                    throw new Error('http://services.odata.org: ' + error.toString());
                }
            }
        );

        this.state = {
            columns: [
                { text: 'Ship Name', dataField: 'ShipName', width: 250 },
                { text: 'Ship Country', hidden: true, dataField: 'ShipCountry', width: 250 },
                { text: 'Ship City', dataField: 'ShipCity', width: 150 },
                { text: 'Ship Address', dataField: 'ShipAddress' }
            ],
            groups: ['ShipCountry'],
            groupsRenderer: (value: string, rowData: any, level: any): string => {
                return 'Ship Country: ' + value;
            },
            source: dataAdapter
        };
    }

    public render() {
        return (
            <div>
                <h3 style={{ fontSize: '16px', fontFamily: 'Verdana' }}>Data Source: 'http://services.odata.org'</h3>

                <JqxDataTable theme={'material-purple'}
                    // @ts-ignore 
                    width={'100%'} source={this.state.source} columns={this.state.columns}
                    altRows={true} pageable={true} serverProcessing={true} pagerButtonsCount={10}
                    groups={this.state.groups} groupsRenderer={this.state.groupsRenderer} />
            </div>
        );
    }
}

export default App;