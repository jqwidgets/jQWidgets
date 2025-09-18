import * as React from 'react';
import { useRef, useState } from 'react';
import { generatedata } from './generatedata';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

const App = () => {
    const myGrid = useRef<JqxGrid>(null);

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

    const [columns] = useState<IGridProps['columns']>([
        { text: 'Name', columntype: 'textbox', filtertype: 'input', datafield: 'name', width: 215 },
        { text: 'Product', filtertype: 'checkedlist', datafield: 'productname', width: 220 },
        { text: 'Ship Date', datafield: 'date', filtertype: 'range', width: 210, cellsalign: 'right', cellsformat: 'd' },
        { text: 'Qty.', datafield: 'quantity', filtertype: 'number', cellsalign: 'right' }
    ]);
    const [dataAdapter] = useState(() => new jqx.dataAdapter(source));
    const [checked, setChecked] = useState<'top' | 'topAboveFilterRow' | 'bottom'>('top');

    const topBtnOnChecked = () => {
        setChecked('top');
        myGrid.current!.setOptions({ everpresentrowposition: 'top' });
    };

    const topAboveFilterRowBtnOnChecked = () => {
        setChecked('topAboveFilterRow');
        myGrid.current!.setOptions({ everpresentrowposition: 'topAboveFilterRow' });
    };

    const bottomBtnOnChecked = () => {
        setChecked('bottom');
        myGrid.current!.setOptions({ everpresentrowposition: 'bottom' });
    };

    return (
        <div>
            <JqxGrid
                theme="material-purple"
                ref={myGrid}
                width="100%"
                source={dataAdapter}
                columns={columns}
                filterable={true}
                showeverpresentrow={true}
                editable={true}
                showfilterrow={true}
                everpresentrowposition="top"
                selectionmode="multiplecellsadvanced"
            />
            <br />
            <JqxRadioButton
                theme="material-purple"
                onChecked={topBtnOnChecked}
                checked={checked === 'top'}
            >
                Top Position
            </JqxRadioButton>
            <JqxRadioButton
                theme="material-purple"
                onChecked={topAboveFilterRowBtnOnChecked}
                checked={checked === 'topAboveFilterRow'}
            >
                Top Position Above Filter Row
            </JqxRadioButton>
            <JqxRadioButton
                theme="material-purple"
                onChecked={bottomBtnOnChecked}
                checked={checked === 'bottom'}
            >
                Bottom Position
            </JqxRadioButton>
        </div>
    );
};

export default App;