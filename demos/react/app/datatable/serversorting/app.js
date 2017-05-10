import React from 'react';
import ReactDOM from 'react-dom';

import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';

class App extends React.Component {
    render() {
        let source =
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

        let dataAdapter = new $.jqx.dataAdapter(source,
            {
                formatData: (data) => {
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
                downloadComplete: (data, status, xhr) => {
                    if (!source.totalRecords) {
                        source.totalRecords = data.value.length;
                    }
                },
                loadError: (xhr, status, error) => {
                    throw new Error('http://services.odata.org: ' + error.toString());
                }
            }
        );

        let columns =
            [
                { text: 'Ship Name', dataField: 'ShipName', width: 300 },
                { text: 'Ship Country', dataField: 'ShipCountry', width: 250 },
                { text: 'Ship City', dataField: 'ShipCity', width: 150 },
                { text: 'Ship Address', dataField: 'ShipAddress' }
            ];

        return (
            <div>
                <h3 style={{ fontSize: 16, fontFamily: 'Verdana' }}>Data Source: 'http://services.odata.org'</h3>
                <JqxDataTable
                    width={850} source={dataAdapter} columnsResize={true}
                    pageable={true} sortable={true} altRows={true}
                    serverProcessing={true} pagerButtonsCount={10} columns={columns}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
