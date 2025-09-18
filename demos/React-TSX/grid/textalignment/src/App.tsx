import * as React from 'react';
import { useRef, useState } from 'react';
import { generatedata } from './generatedata';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

function App() {
    const myGrid = useRef<JqxGrid>(null);

    const columns: IGridProps['columns'] = [
        { text: 'First Name', datafield: 'firstname', width: 200, cellsalign: 'center', align: 'center' },
        { text: 'Last Name', datafield: 'lastname', width: 200, cellsalign: 'center', align: 'center' },
        { text: 'Product', datafield: 'productname', width: 180, cellsalign: 'center', align: 'center' },
        { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'center', align: 'center' },
        { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'center', align: 'center', cellsformat: 'c2' },
        { text: 'Total', datafield: 'total', cellsalign: 'center', align: 'center', cellsformat: 'c2' }
    ];

    const source: any = {
        datafields: [
            { name: 'id', type: 'number' },
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'available', type: 'bool' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'total', type: 'number' }
        ],
        datatype: 'array',
        localdata: generatedata(200, false)
    };

    const [gridSource] = useState(() => new jqx.dataAdapter(source));

    const setAlignment = (align: string) => {
        if (myGrid.current) {
            myGrid.current.beginupdate();
            columns.forEach((column) => {
                myGrid.current!.setcolumnproperty(column.datafield!, 'align', align);
                myGrid.current!.setcolumnproperty(column.datafield!, 'cellsalign', align);
            });
            myGrid.current.endupdate();
        }
    };

    const leftBtnOnChecked = () => setAlignment('left');
    const centerBtnOnChecked = () => setAlignment('center');
    const rightBtnOnChecked = () => setAlignment('right');

    return (
        <div>
            <JqxGrid
                theme={'material-purple'}
                ref={myGrid}
                // @ts-ignore
                width={'100%'}
                source={gridSource}
                columns={columns}
                selectionmode={'multiplecellsadvanced'}
            />

            <div>
                <h3>Alignment</h3>
                <JqxRadioButton
                    theme={'material-purple'}
                    style={{ float: 'left' }}
                    onChecked={leftBtnOnChecked}
                >
                    Left
                </JqxRadioButton>
                <JqxRadioButton
                    theme={'material-purple'}
                    style={{ float: 'left' }}
                    onChecked={centerBtnOnChecked}
                    checked={true}
                >
                    Center
                </JqxRadioButton>
                <JqxRadioButton
                    theme={'material-purple'}
                    style={{ float: 'left' }}
                    onChecked={rightBtnOnChecked}
                >
                    Right
                </JqxRadioButton>
            </div>
        </div>
    );
}

export default App;