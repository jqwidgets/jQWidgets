import React, { useRef, useCallback, useState, useMemo } from 'react';
import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const myGrid = useRef<JqxGrid>(null);
    const source = useMemo(() => ({
        datafields: [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'total', type: 'number' }
        ],
        datatype: 'array',
        localdata: generatedata(500, false)
    }), []);
    const [gridSource, setGridSource] = useState(() => new jqx.dataAdapter(source));
    const columns = useMemo(() => [
        { text: 'First Name', datafield: 'firstname', width: 130 },
        { text: 'Last Name', datafield: 'lastname', width: 130 },
        { text: 'Product', datafield: 'productname', width: 180 },
        { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
        { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
        { text: 'Total', datafield: 'total', cellsalign: 'right', minwidth: 100, cellsformat: 'c2' }
    ], []);

    const refreshBtnOnClick = useCallback(() => {
        source.localdata = generatedata(500, false);
        myGrid.current!.updatebounddata('cells');
    }, [source]);

    const clearBtnOnClick = useCallback(() => {
        myGrid.current!.clear();
    }, []);

    const style = { display: 'inline-block' };

    return (
        <div>
            <JqxGrid
                theme={'material-purple'}
                ref={myGrid}
                // @ts-ignore
                width={'100%'}
                height={300}
                source={gridSource}
                columns={columns}
            />
            <div style={{ marginTop: '10px' }}>
                <JqxButton theme={'material-purple'} style={style} onClick={refreshBtnOnClick} width={100}>Refresh Data</JqxButton>
                <JqxButton theme={'material-purple'} style={style} onClick={clearBtnOnClick} width={50}>Clear</JqxButton>
            </div>
        </div>
    );
};

export default App;