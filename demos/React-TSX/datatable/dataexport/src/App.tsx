import * as React from 'react';
import { useRef, useMemo } from 'react';
import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxDataTable, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

function App() {
    const myDataTable = useRef<JqxDataTable>(null);

    const { source, columns } = useMemo(() => {
        const sourceObj: any = {
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
            localData: generatedata(100, false)
        };
        return {
            source: new jqx.dataAdapter(sourceObj),
            columns: [
                { text: 'First Name', dataField: 'firstname', width: 190 },
                { text: 'Last Name', dataField: 'lastname', width: 190 },
                { text: 'Product', dataField: 'productname', width: 177 },
                { text: 'Available', dataField: 'available', width: 67, cellsAlign: 'center', align: 'center' },
                { text: 'Ship Date', dataField: 'date', width: 90, align: 'right', cellsAlign: 'right', cellsFormat: 'd' },
                { text: 'Quantity', dataField: 'quantity', width: 70, align: 'right', cellsAlign: 'right' },
                { text: 'Price', dataField: 'price', cellsAlign: 'right', width: 100, align: 'right', cellsFormat: 'c2' }
            ]
        };
    }, []);

    const excelExport = () => myDataTable.current!.exportData('xls');
    const xmlExport = () => myDataTable.current!.exportData('xml');
    const csvExport = () => myDataTable.current!.exportData('csv');
    const tsvExport = () => myDataTable.current!.exportData('tsv');
    const htmlExport = () => myDataTable.current!.exportData('html');
    const jsonExport = () => myDataTable.current!.exportData('json');
    const pdfExport = () => myDataTable.current!.exportData('pdf');

    return (
        <div>
            <JqxDataTable
                theme={'material-purple'}
                ref={myDataTable}
                // @ts-ignore
                width={'100%'}
                source={source}
                columns={columns}
                altRows={true}
                pageable={true}
                sortable={true}
            />
            <div style={{ marginTop: '20px' }}>
                <div style={{ float: 'left' }}>
                    <JqxButton theme={'material-purple'} onClick={excelExport} width={110}>Export to Excel</JqxButton>
                    <br />
                    <br />
                    <JqxButton theme={'material-purple'} onClick={xmlExport} width={110}>Export to XML</JqxButton>
                </div>
                <div style={{ marginLeft: '10px', float: 'left' }}>
                    <JqxButton theme={'material-purple'} onClick={csvExport} width={110}>Export to CSV</JqxButton>
                    <br />
                    <br />
                    <JqxButton theme={'material-purple'} onClick={tsvExport} width={110}>Export to TSV</JqxButton>
                </div>
                <div style={{ marginLeft: '10px', float: 'left' }}>
                    <JqxButton theme={'material-purple'} onClick={htmlExport} width={110}>Export to HTML</JqxButton>
                    <br />
                    <br />
                    <JqxButton theme={'material-purple'} onClick={jsonExport} width={110}>Export to JSON</JqxButton>
                </div>
                <div style={{ marginLeft: '10px', float: 'left' }}>
                    <JqxButton theme={'material-purple'} onClick={pdfExport} width={110}>Export to PDF</JqxButton>
                </div>
            </div>
        </div>
    );
}

export default App;