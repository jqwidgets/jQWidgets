import React, { useRef, useMemo, useCallback } from 'react';
import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const myGrid = useRef<JqxGrid>(null);

    const columns = useMemo(
        () => [
            { text: 'Name', columntype: 'textbox', filtercondition: 'STARTS_WITH', datafield: 'name', width: '30%' },
            { text: 'Range', datafield: 'range', filtertype: 'range', cellsalign: 'right', width: '35%', cellsformat: 'd' },
            { text: 'Date', datafield: 'date', filtertype: 'date', cellsalign: 'right', width: '35%', cellsformat: 'd' }
        ],
        []
    );

    const source = useMemo(() => {
        const s: any = {
            datafields: [
                { name: 'name', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'available', type: 'bool' },
                { name: 'date', type: 'date' },
                { name: 'range', map: 'date', type: 'date' },
                { name: 'quantity', type: 'number' }
            ],
            datatype: 'array',
            localdata: generatedata(500)
        };
        return new jqx.dataAdapter(s);
    }, []);

    const btnOnClick = useCallback(() => {
        myGrid.current?.clearfilters();
    }, []);

    return (
        <div>
            <JqxGrid
                theme="material-purple"
                ref={myGrid}
                width="100%"
                source={source}
                columns={columns}
                showfilterrow={true}
                filterable={true}
                selectionmode="multiplecellsadvanced"
            />
            <div style={{ marginTop: '20px' }}>
                <JqxButton theme="material-purple" onClick={btnOnClick} width={100}>
                    Remove Filter
                </JqxButton>
            </div>
        </div>
    );
};

export default App;