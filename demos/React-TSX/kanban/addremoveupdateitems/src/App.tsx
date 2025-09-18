import * as React from 'react';
import { useRef, useState, useCallback } from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxKanban, { IKanbanProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxkanban';

const App = () => {
    const myKanban = useRef<JqxKanban>(null);
    const myRemoveItemBtn = useRef<JqxButton>(null);
    const myUpdateItemBtn = useRef<JqxButton>(null);
    const newItemsCountRef = useRef<number>(0);

    const fields: any[] = [
        { name: 'id', type: 'string' },
        { name: 'status', map: 'state', type: 'string' },
        { name: 'text', map: 'label', type: 'string' },
        { name: 'tags', type: 'string' },
        { name: 'color', map: 'hex', type: 'string' },
        { name: 'resourceId', type: 'number' }
    ];

    const source = {
        dataFields: fields,
        dataType: 'array',
        localData: [
            { id: '1161', state: 'new', label: 'Combine Orders', tags: 'orders, combine', hex: '#5dc3f0', resourceId: 3 },
            { id: '1645', state: 'work', label: 'Change Billing Address', tags: 'billing', hex: '#f19b60', resourceId: 1 },
            { id: '9213', state: 'new', label: 'One item added to the cart', tags: 'cart', hex: '#5dc3f0', resourceId: 3 },
            { id: '6546', state: 'done', label: 'Edit Item Price', tags: 'price, edit', hex: '#5dc3f0', resourceId: 4 },
            { id: '9034', state: 'new', label: 'Login 404 issue', tags: 'issue, login', hex: '#6bbd49' }
        ]
    };

    const resourcesAdapterFunc = (): any => {
        const resourcesSource = {
            dataFields: [
                { name: 'id', type: 'number' },
                { name: 'name', type: 'string' },
                { name: 'image', type: 'string' },
                { name: 'common', type: 'boolean' }
            ],
            dataType: 'array',
            localData: [
                { id: 0, name: 'No name', image: 'https://www.jqwidgets.com/react/images/andrew.png', common: true },
                { id: 1, name: 'Andrew Fuller', image: 'https://www.jqwidgets.com/react/images/andrew.png' },
                { id: 2, name: 'Janet Leverling', image: 'https://www.jqwidgets.com/react/images/janet.png' },
                { id: 3, name: 'Steven Buchanan', image: 'https://www.jqwidgets.com/react/images/steven.png' },
                { id: 4, name: 'Nancy Davolio', image: 'https://www.jqwidgets.com/react/images/nancy.png' },
                { id: 5, name: 'Michael Buchanan', image: 'https://www.jqwidgets.com/react/images/Michael.png' },
                { id: 6, name: 'Margaret Buchanan', image: 'https://www.jqwidgets.com/react/images/margaret.png' },
                { id: 7, name: 'Robert Buchanan', image: 'https://www.jqwidgets.com/react/images/robert.png' },
                { id: 8, name: 'Laura Buchanan', image: 'https://www.jqwidgets.com/react/images/Laura.png' },
                { id: 9, name: 'Laura Buchanan', image: 'https://www.jqwidgets.com/react/images/Anne.png' }
            ]
        };
        const resourcesDataAdapter = new jqx.dataAdapter(resourcesSource);
        return resourcesDataAdapter;
    };

    const [kanbanState, setKanbanState] = useState<Omit<IKanbanProps, 'width' | 'height'>>({
        columns: [
            { text: 'Backlog', dataField: 'new', maxItems: 5 },
            { text: 'In Progress', dataField: 'work', maxItems: 5 },
            { text: 'Done', dataField: 'done', maxItems: 5, collapseDirection: 'right' }
        ],
        resources: resourcesAdapterFunc(),
        source: new jqx.dataAdapter(source)
    });

    const addItemBtnOnClick = useCallback(() => {
        myKanban.current?.addItem({
            status: 'new',
            text: 'Task' + newItemsCountRef.current,
            tags: 'task' + newItemsCountRef.current,
            color: '#5dc3f0'
        });
        newItemsCountRef.current++;
    }, []);

    const removeItemBtnOnClick = useCallback(() => {
        myKanban.current?.removeItem('1645');
        myRemoveItemBtn.current?.setOptions({ disabled: true });
    }, []);

    const updateItemBtnOnClick = useCallback(() => {
        myKanban.current?.updateItem('1161', {
            status: 'new',
            text: 'Task',
            tags: 'task',
            color: '#5dc3f0',
            resourceId: 3
        });
        myUpdateItemBtn.current?.setOptions({ disabled: true });
    }, []);

    const style: React.CSSProperties = { display: 'inline-block' };

    return (
        <div>
            <JqxKanban
                theme="material-purple"
                ref={myKanban}
                width="100%"
                height={500}
                source={kanbanState.source}
                columns={kanbanState.columns}
                resources={kanbanState.resources}
            />
            <br />
            <JqxButton theme="material-purple" style={style} onClick={addItemBtnOnClick} width={90}>
                Add Item
            </JqxButton>
            <JqxButton theme="material-purple" ref={myRemoveItemBtn} style={style} onClick={removeItemBtnOnClick} width={90}>
                Remove Item
            </JqxButton>
            <JqxButton theme="material-purple" ref={myUpdateItemBtn} style={style} onClick={updateItemBtnOnClick} width={90}>
                Update Item
            </JqxButton>
        </div>
    );
};

export default App;