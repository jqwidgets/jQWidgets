import * as React from 'react';
import { useState, useMemo } from 'react';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

const App = () => {
    const source = useMemo(() => {
        const src: any = {
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
        return src;
    }, []);

    const dataAdapter = useMemo(() => {
        return new jqx.dataAdapter(source, {
            downloadComplete: (data: any, status: any, xhr: any): void => {
                if (!source['totalRecords']) {
                    source['totalRecords'] = data.value.length;
                }
            },
            formatData: (data: any): void => {
                if (source['totalRecords']) {
                    data.$skip = data.pagenum * data.pagesize;
                    data.$top = data.pagesize;
                    data.$orderby = 'ShipCountry asc';
                }
                return data;
            },
            loadError: (xhr: any, status: any, error: any): void => {
                throw new Error('http://services.odata.org: ' + error.toString());
            }
        });
    }, [source]);

    const columns = useMemo(
        () => [
            { text: 'Ship Name', dataField: 'ShipName', width: 250 },
            { text: 'Ship Country', hidden: true, dataField: 'ShipCountry', width: 250 },
            { text: 'Ship City', dataField: 'ShipCity', width: 150 },
            { text: 'Ship Address', dataField: 'ShipAddress' }
        ],
        []
    );

    const groups = useMemo(() => ['ShipCountry'], []);
    const groupsRenderer = React.useCallback((value: string, rowData: any, level: any): string => {
        return 'Ship Country: ' + value;
    }, []);

    return (
        <div>
            <h3 style={{ fontSize: '16px', fontFamily: 'Verdana' }}>Data Source: 'http://services.odata.org'</h3>
            <JqxDataTable
                theme={'material-purple'}
                // @ts-ignore
                width={'100%'}
                source={dataAdapter}
                columns={columns}
                altRows={true}
                pageable={true}
                serverProcessing={true}
                pagerButtonsCount={10}
                groups={groups}
                groupsRenderer={groupsRenderer}
            />
        </div>
    );
};

export default App;