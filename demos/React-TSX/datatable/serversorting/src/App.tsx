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
        }

        const dataAdapter: any = new jqx.dataAdapter(source,
            {
                downloadComplete: (data: any, status: any, xhr: any): void => {
                    if (!source.totalRecords) {
                        source.totalRecords = data.value.length;
                    }
                },
                formatData: (data: any): void => {
                    if (source.totalRecords) {
                        // update the $skip and $top params of the OData service.
                        // data.pagenum - page number starting from 0.
                        // data.pagesize - page size
                        // data.sortdatafield - the column's datafield value(ShipCountry, ShipCity, etc.).
                        // data.sortorder - the sort order(asc or desc).
                        data.$skip = data.pagenum * data.pagesize;
                        data.$top = data.pagesize;
                        if (data.sortdatafield && data.sortorder) {
                            data.$orderby = data.sortdatafield + ' ' + data.sortorder;
                        }
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
                { text: 'Ship Name', dataField: 'ShipName', width: 300 },
                { text: 'Ship Country', dataField: 'ShipCountry', width: 250 },
                { text: 'Ship City', dataField: 'ShipCity', width: 150 },
                { text: 'Ship Address', dataField: 'ShipAddress' }
            ],
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
                    altRows={true} pageable={true} sortable={true} pagerButtonsCount={10}
                    serverProcessing={true} columnsResize={true} />
            </div>
        );
    }
}

export default App;