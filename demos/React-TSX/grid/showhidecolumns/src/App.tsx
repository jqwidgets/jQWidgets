import * as React from 'react';
import { useRef, useState, useMemo, useCallback } from 'react';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxListBox, { IListBoxProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistbox';

const App = () => {
    const myGrid = useRef<JqxGrid>(null);

    const source = useMemo(() => ({
        datafields: [
            { name: 'name' },
            { name: 'type' },
            { name: 'calories', type: 'int' },
            { name: 'totalfat' },
            { name: 'protein' }
        ],
        datatype: 'json',
        id: 'id',
        url: 'beverages.txt'
    }), []);

    const [columns] = useState<IGridProps['columns']>([
        { text: 'Name', datafield: 'name', width: 100, hidden: true },
        { text: 'Beverage Type', datafield: 'type' },
        { text: 'Calories', datafield: 'calories' },
        { text: 'Total Fat', datafield: 'totalfat' },
        { text: 'Protein', datafield: 'protein' }
    ]);

    const [listBoxSource] = useState<IListBoxProps['source']>([
        { label: 'Name', value: 'name', checked: false },
        { label: 'Beverage Type', value: 'type', checked: true },
        { label: 'Calories', value: 'calories', checked: true },
        { label: 'Total Fat', value: 'totalfat', checked: true },
        { label: 'Protein', value: 'protein', checked: true }
    ]);

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    const myListBoxOnCheckChange = useCallback((event: any) => {
        if (!myGrid.current) return;
        myGrid.current.beginupdate();
        if (event.args.checked) {
            myGrid.current.showcolumn(event.args.value);
        } else {
            myGrid.current.hidecolumn(event.args.value);
        }
        myGrid.current.endupdate();
    }, []);

    return (
        <div>
            <JqxListBox theme={'material-purple'} style={{ float: 'left' }} onCheckChange={myListBoxOnCheckChange}
                width={200} height={200} source={listBoxSource} checkboxes={true} />
            <JqxGrid theme={'material-purple'} ref={myGrid} style={{ float: 'left', marginLeft: '20px' }}
                width={600} source={dataAdapter} columns={columns} columnsresize={true} />
        </div>
    );
};

export default App;