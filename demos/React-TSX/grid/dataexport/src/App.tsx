import * as React from 'react';
import { useRef, useMemo } from 'react';
import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const myGrid = useRef<JqxGrid>(null);

    const { source, columns } = useMemo(() => {
        const source: any = {
            datafields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'available', type: 'bool' },
                { name: 'date', type: 'date' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' }
            ],
            datatype: 'array',
            localdata: generatedata(100, false)
        };
        const columns = [
            { text: 'First Name', datafield: 'firstname', width: 130 },
            { text: 'Last Name', datafield: 'lastname', width: 130 },
            { text: 'Product', datafield: 'productname', width: 200 },
            { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67, cellsalign: 'center', align: 'center' },
            { text: 'Ship Date', datafield: 'date', width: 120, align: 'right', cellsalign: 'right', cellsformat: 'd' },
            { text: 'Quantity', datafield: 'quantity', width: 70, align: 'right', cellsalign: 'right' },
            { text: 'Price', datafield: 'price', cellsalign: 'right', align: 'right', cellsformat: 'c2' }
        ];
        return { source: new jqx.dataAdapter(source), columns };
    }, []);

    const exportData = (type: string) => {
        myGrid.current && myGrid.current.exportdata(type, 'jqxGrid');
    };

    return (
        <div style={{ fontSize: '13px', fontFamily: 'Verdana', float: 'left' }}>
            <JqxGrid
                theme="material-purple"
                ref={myGrid}
                // @ts-ignore
                width="100%"
                source={source}
                columns={columns}
                sortable={true}
                altrows={true}
                selectionmode="multiplecellsadvanced"
            />
            <div style={{ marginTop: '20px' }}>
                <div style={{ float: 'left' }}>
                    <JqxButton theme="material-purple" onClick={() => exportData('xls')}>Export to Excel</JqxButton>
                    <br /><br />
                    <JqxButton theme="material-purple" onClick={() => exportData('xml')}>Export to XML</JqxButton>
                </div>
                <div style={{ float: 'left', marginLeft: '10px' }}>
                    <JqxButton theme="material-purple" onClick={() => exportData('csv')}>Export to CSV</JqxButton>
                    <br /><br />
                    <JqxButton theme="material-purple" onClick={() => exportData('tsv')}>Export to TSV</JqxButton>
                </div>
                <div style={{ float: 'left', marginLeft: '10px' }}>
                    <JqxButton theme="material-purple" onClick={() => exportData('html')}>Export to HTML</JqxButton>
                    <br /><br />
                    <JqxButton theme="material-purple" onClick={() => exportData('json')}>Export to JSON</JqxButton>
                </div>
                <div style={{ float: 'left', marginLeft: '10px' }}>
                    <JqxButton theme="material-purple" onClick={() => exportData('pdf')}>Export to PDF</JqxButton>
                </div>
            </div>
        </div>
    );
};

export default App;