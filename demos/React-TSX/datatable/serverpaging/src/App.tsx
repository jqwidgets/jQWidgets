import * as React from 'react';
import { useMemo } from 'react';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

function App() {
    const { columns, source } = useMemo(() => {
        const dataFields = [
            { name: 'ShipCountry', type: 'string' },
            { name: 'ShipCity', type: 'string' },
            { name: 'ShipAddress', type: 'string' },
            { name: 'ShipName', type: 'string' },
            { name: 'Freight', type: 'number' },
            { name: 'ShippedDate', type: 'date' }
        ];
        const source: any = {
            dataFields,
            dataType: 'json',
            root: 'value',
            url: 'http://services.odata.org/V3/Northwind/Northwind.svc/Orders?$format=json&$callback=?'
        };
        const dataAdapter: any = new jqx.dataAdapter(source, {
            downloadComplete: (data: any, status: any, xhr: any): void => {
                if (!source.totalRecords) {
                    source.totalRecords = parseInt(data['odata.count'], 10);
                }
            },
            formatData: (data: any): void => {
                data.$skip = data.pagenum * data.pagesize;
                data.$top = data.pagesize;
                data.$inlinecount = 'allpages';
                return data;
            },
            loadError: (xhr: any, status: any, error: any): void => {
                throw new Error('http://services.odata.org: ' + error.toString());
            }
        });
        const columns = [
            { text: 'Ship Name', dataField: 'ShipName', width: 300 },
            { text: 'Ship Country', hidden: true, dataField: 'ShipCountry', width: 250 },
            { text: 'Ship City', dataField: 'ShipCity', width: 150 },
            { text: 'Ship Address', dataField: 'ShipAddress' }
        ];
        return { columns, source: dataAdapter };
    }, []);

    return (
        <div>
            <h3 style={{ fontSize: '16px', fontFamily: 'Verdana' }}>Data Source: 'http://services.odata.org'</h3>
            <JqxDataTable
                theme={'material-purple'}
                width={'100%'}
                source={source}
                columns={columns}
                altRows={true}
                pageable={true}
                pagerButtonsCount={10}
                serverProcessing={true}
                columnsResize={true}
            />
        </div>
    );
}

export default App;