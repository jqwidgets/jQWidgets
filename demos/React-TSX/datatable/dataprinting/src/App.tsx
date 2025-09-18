import * as React from 'react';
import { useRef, useMemo } from 'react';
import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxDataTable, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

function App() {
    const myDataTable = useRef<JqxDataTable>(null);

    const source = useMemo(() => ({
        dataFields: [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'available', type: 'bool' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'date', type: 'date' }
        ],
        dataType: 'array',
        localData: generatedata(10, false)
    }), []);

    const dataTableSource = useMemo(() => new jqx.dataAdapter(source), [source]);

    const columns = useMemo(() => [
        { text: 'First Name', dataField: 'firstname', width: 150 },
        { text: 'Last Name', dataField: 'lastname', width: 150 },
        { text: 'Product', dataField: 'productname', width: 200 },
        { text: 'Ship Date', dataField: 'date', width: 150, align: 'right', cellsAlign: 'right', cellsFormat: 'd' },
        { text: 'Quantity', dataField: 'quantity', width: 100, align: 'right', cellsAlign: 'right' },
        { text: 'Price', dataField: 'price', width: 100, cellsAlign: 'right', align: 'right', cellsFormat: 'c2' }
    ], []);

    const exportSettings = useMemo(() => ({
        fileName: null
    }), []);

    const printBtnOnClick = React.useCallback(() => {
        const gridContent = myDataTable.current!.exportData('html');
        const newWindow = window.open('', '', 'width=800, height=500');
        const document = newWindow!.document.open();
        const pageContent =
            '<!DOCTYPE html>' +
            '<html>' +
            '<head>' +
            '<meta charset="utf-8" />' +
            '<title>jQWidgets DataTable</title>' +
            '</head>' +
            '<body>' + gridContent + '</body></html>';
        document.write(pageContent);
        document.close();
        newWindow!.print();
    }, []);

    return (
        <div>
            <JqxDataTable
                theme="material-purple"
                ref={myDataTable}
                width="100%"
                source={dataTableSource}
                columns={columns}
                altRows={true}
                sortable={true}
                exportSettings={exportSettings}
            />
            <div style={{ marginTop: '20px' }}>
                <div style={{ marginLeft: '10px', float: 'left' }}>
                    <JqxButton
                        theme="material-purple"
                        onClick={printBtnOnClick}
                        width={80}
                    >
                        Print
                    </JqxButton>
                </div>
            </div>
        </div>
    );
}

export default App;