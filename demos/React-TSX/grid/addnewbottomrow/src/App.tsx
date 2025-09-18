import * as React from 'react';
import { useRef, useEffect, useState } from 'react';
import { generatedata } from './generatedata';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

function App() {
    const myGrid = useRef<JqxGrid>(null);
    const myRadioButton = useRef<JqxRadioButton>(null);

    const [columns] = useState([
        { text: 'Name', columntype: 'textbox', filtertype: 'input', datafield: 'name', width: 215 },
        { text: 'Product', filtertype: 'checkedlist', datafield: 'productname', width: 220 },
        { text: 'Ship Date', datafield: 'date', filtertype: 'range', width: 210, cellsalign: 'right', cellsformat: 'd' },
        { text: 'Qty.', datafield: 'quantity', filtertype: 'number', cellsalign: 'right' }
    ]);
    const [everpresentrowactions, setEverpresentrowactions] = useState<'add reset' | 'addBottom reset'>('add reset');

    useEffect(() => {
        const source: any = {
            datafields: [
                { name: 'name', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'available', type: 'bool' },
                { name: 'date', type: 'date' },
                { name: 'quantity', type: 'number' }
            ],
            datatype: 'array',
            localdata: generatedata(20, false)
        };
        const dataAdapter = new jqx.dataAdapter(source);
        myGrid.current?.setOptions({ source: dataAdapter });
        myRadioButton.current?.setOptions({ checked: true });
    }, []);

    const btnTopOnChecked = () => {
        setEverpresentrowactions('add reset');
    };

    const btnBottomOnChecked = () => {
        setEverpresentrowactions('addBottom reset');
    };

    return (
        <div>
            <JqxGrid
                theme="material-purple"
                ref={myGrid}
                // @ts-ignore
                width="100%"
                filterable={true}
                editable={true}
                showeverpresentrow={true}
                everpresentrowposition="bottom"
                everpresentrowactions={everpresentrowactions}
                columns={columns}
                selectionmode="multiplecellsadvanced"
            />
            <br />
            <JqxRadioButton
                theme="material-purple"
                ref={myRadioButton}
                onChecked={btnTopOnChecked}
            >
                Add New Row to Top
            </JqxRadioButton>
            <JqxRadioButton
                theme="material-purple"
                onChecked={btnBottomOnChecked}
            >
                Add New Row to Bottom
            </JqxRadioButton>
        </div>
    );
}

export default App;