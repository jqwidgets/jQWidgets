import * as React from 'react';
import { useRef, useMemo, useCallback } from 'react';
import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

const App = () => {
    const myTreeGrid = useRef<JqxTreeGrid>(null);

    const source = useMemo(() => ({
        dataFields: [
            { name: 'CompanyName', map: 'm\\:properties>d\\:CompanyName' },
            { name: 'ContactName', map: 'm\\:properties>d\\:ContactName' },
            { name: 'ContactTitle', map: 'm\\:properties>d\\:ContactTitle' },
            { name: 'City', map: 'm\\:properties>d\\:City' },
            { name: 'PostalCode', map: 'm\\:properties>d\\:PostalCode' },
            { name: 'Country', map: 'm\\:properties>d\\:Country' }
        ],
        dataType: 'xml',
        hierarchy: {
            groupingDataFields: [
                {
                    name: 'Country'
                }
            ]
        },
        id: { name: 'CustomerID', map: 'm\\:properties>d\\:CustomerID' },
        record: 'content',
        root: 'entry',
        url: 'customers.xml'
    }), []);

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    const columns = useMemo(() => [
        { dataField: 'City', text: 'City', width: 250 },
        { dataField: 'CompanyName', minWidth: 100, text: 'Company Name', width: 200 },
        { dataField: 'ContactName', text: 'Contact Name', width: 150 },
        { dataField: 'ContactTitle', text: 'Contact Title', width: 300 },
        { dataField: 'PostalCode', text: 'Postal Code', width: 120 }
    ], []);

    const icons = useCallback((rowKey: number | string, rowData: any): string | boolean => {
        const level = rowData.level;
        if (level === 0) {
            const country = rowData.label;
            return 'https://www.jqwidgets.com/react/images/' + (country.toLowerCase()).trim() + '.png';
        }
        return false;
    }, []);

    const ready = useCallback((): void => {
        myTreeGrid.current?.expandRow(0);
    }, []);

    return (
        <JqxTreeGrid
            theme={'material-purple'}
            ref={myTreeGrid}
            // @ts-ignore
            width={'100%'}
            source={dataAdapter}
            pageable={true}
            columnsResize={true}
            altRows={true}
            icons={icons}
            columns={columns}
            ready={ready}
        />
    );
};

export default App;