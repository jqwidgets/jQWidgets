import * as React from 'react';
import { useEffect, useRef, useMemo } from 'react';

import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

function App() {
    const log = useRef<HTMLDivElement>(null);

    const observableArray = useRef<any>(
        new jqx.observableArray(generatedata(2, false), () => {
            updateLog(observableArray.current);
        })
    );

    const source = useMemo(() => ({
        datafields: [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'total', type: 'number' }
        ],
        datatype: 'obserableArray',
        localdata: observableArray.current
    }), []);

    const columns: IGridProps['columns'] = [
        { text: 'Name', datafield: 'firstname', width: 120 },
        { text: 'Last Name', datafield: 'lastname', width: 120 },
        { text: 'Product', datafield: 'productname', width: 180 },
        { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
        { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
        { text: 'Total', datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
    ];

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    function updateLog(currentObsArr: any): void {
        let rows = '';
        for (const item of currentObsArr) {
            rows += currentObsArr.toJSON(['firstname', 'lastname', 'productname', 'quantity', 'price', 'total'], item);
            rows += '<br/>';
        }
        if (log.current) log.current.innerHTML = rows;
    }

    useEffect(() => {
        updateLog(observableArray.current);
        // eslint-disable-next-line
    }, []);

    const addItemBtnOnClick = () => {
        const row = generatedata(1, false)[0];
        const temp = observableArray.current;
        temp.push(row);
        observableArray.current = temp;
    };

    const deleteItemBtnOnClick = () => {
        if (observableArray.current.length > 0) {
            const temp = observableArray.current;
            temp.splice(0, 1);
            observableArray.current = temp;
        }
    };

    const updateItemBtnOnClick = () => {
        if (observableArray.current.length > 0) {
            const row = generatedata(1, false)[0];
            const temp = observableArray.current;
            temp.set(0, row);
            observableArray.current = temp;
        }
    };

    const updatePathBtnOnClick = () => {
        if (observableArray.current.length > 0) {
            const row = generatedata(1, false)[0];
            const temp = observableArray.current;
            temp.set('0.firstname', row.firstname);
            temp.set('0.lastname', row.lastname);
            observableArray.current = temp;
        }
    };

    return (
        <div>
            <JqxGrid
                theme={'material-purple'}
                // @ts-ignore
                width={'100%'}
                height={150}
                source={dataAdapter}
                columns={columns}
                columnsresize={true}
            />
            <br /><br />
            <JqxButton theme={'material-purple'} style={{ float: 'left', marginRight: '5px' }} onClick={addItemBtnOnClick}>Add Item</JqxButton>
            <JqxButton theme={'material-purple'} style={{ float: 'left', marginRight: '5px' }} onClick={deleteItemBtnOnClick}>Delete Item</JqxButton>
            <JqxButton theme={'material-purple'} style={{ float: 'left', marginRight: '5px' }} onClick={updateItemBtnOnClick}>Update Item</JqxButton>
            <JqxButton theme={'material-purple'} style={{ float: 'left' }} onClick={updatePathBtnOnClick}>Update Path</JqxButton>
            <br />
            <div ref={log} style={{ clear: 'both' }} />
        </div>
    );
}

export default App;