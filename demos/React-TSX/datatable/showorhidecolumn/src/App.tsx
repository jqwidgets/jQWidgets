import * as React from 'react';
import { useRef, useState, useCallback } from 'react';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';
import JqxListBox, { IListBoxProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistbox';

export interface IState extends IDataTableProps {
    listSource: IListBoxProps['source'];
}

const App = () => {
    const myDataTable = useRef<JqxDataTable>(null);

    const source: any = {
        dataFields: [
            { name: 'name' },
            { name: 'type' },
            { name: 'calories', type: 'int' },
            { name: 'totalfat' },
            { name: 'protein' }
        ],
        dataType: 'json',
        id: 'id',
        url: 'beverages.txt'
    };

    const [columns] = useState<IDataTableProps['columns']>([
        { text: 'Name', dataField: 'name', width: 200 },
        { text: 'Beverage Type', dataField: 'type', width: 200 },
        { text: 'Calories', dataField: 'calories', width: 200 }
    ]);

    const [listSource] = useState<IListBoxProps['source']>([
        { label: 'Beverage Type', value: 'type', checked: true },
        { label: 'Calories', value: 'calories', checked: true }
    ]);

    const [jqxSource] = useState<any>(new jqx.dataAdapter(source));

    const listBoxOnCheckChange = useCallback((event: any) => {
        if (!myDataTable.current) return;
        myDataTable.current.beginUpdate();
        if (event.args.checked) {
            myDataTable.current.showColumn(event.args.value);
        } else {
            myDataTable.current.hideColumn(event.args.value);
        }
        myDataTable.current.endUpdate();
    }, []);

    return (
        <div>
            <JqxListBox
                theme="material-purple"
                style={{ float: 'left' }}
                onCheckChange={listBoxOnCheckChange}
                width={150}
                height={200}
                source={listSource}
                checkboxes={true}
            />
            <JqxDataTable
                theme="material-purple"
                ref={myDataTable}
                style={{ float: 'left', marginLeft: '20px' }}
                source={jqxSource}
                columns={columns}
                pageable={true}
                columnsResize={true}
                pagerButtonsCount={10}
            />
        </div>
    );
};

export default App;