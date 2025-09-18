import * as React from 'react';
import { useRef, useMemo, useCallback } from 'react';
import JqxKanban, { IKanbanProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxkanban';

const App = () => {
    const myLog = useRef<HTMLDivElement>(null);
    const logRef = useRef<any[]>([]);

    const fields = useMemo(() => [
        { name: 'id', type: 'string' },
        { name: 'status', map: 'state', type: 'string' },
        { name: 'text', map: 'label', type: 'string' },
        { name: 'tags', type: 'string' },
        { name: 'color', map: 'hex', type: 'string' },
        { name: 'resourceId', type: 'number' }
    ], []);

    const source = useMemo(() => ({
        dataFields: fields,
        dataType: 'array',
        localData: [
            { id: '1161', state: 'new', label: 'Combine Orders', tags: 'orders, combine', hex: '#5dc3f0', resourceId: 3 },
            { id: '1645', state: 'work', label: 'Change Billing Address', tags: 'billing', hex: '#f19b60', resourceId: 1 },
            { id: '9213', state: 'new', label: 'One item added to the cart', tags: 'cart', hex: '#5dc3f0', resourceId: 3 },
            { id: '6546', state: 'done', label: 'Edit Item Price', tags: 'price, edit', hex: '#5dc3f0', resourceId: 4 },
            { id: '9034', state: 'new', label: 'Login 404 issue', tags: 'issue, login', hex: '#6bbd49' }
        ]
    }), [fields]);

    const resources = useMemo(() => {
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
        return new jqx.dataAdapter(resourcesSource);
    }, []);

    const columns = useMemo(() => [
        { text: 'Backlog', dataField: 'new' },
        { text: 'In Progress', dataField: 'work' },
        { text: 'Done', dataField: 'done' }
    ], []);

    const updateLog = useCallback(() => {
        let count = 0;
        let str = '';
        for (let i = logRef.current.length - 1; i >= 0; i--) {
            str += logRef.current[i] + '<br/>';
            count++;
            if (count > 10) break;
        }
        if (myLog.current) myLog.current.innerHTML = str;
    }, []);

    const onItemMoved = useCallback((event: any) => {
        logRef.current.push('itemMoved is raised');
        updateLog();
    }, [updateLog]);

    const onColumnCollapsed = useCallback((event: any) => {
        logRef.current.push('columnCollapsed is raised');
        updateLog();
    }, [updateLog]);

    const onColumnExpanded = useCallback((event: any) => {
        logRef.current.push('columnExpanded is raised');
        updateLog();
    }, [updateLog]);

    const onItemAttrClicked = useCallback((event: any) => {
        logRef.current.push('itemAttrClicked is raised');
        updateLog();
    }, [updateLog]);

    const onColumnAttrClicked = useCallback((event: any) => {
        logRef.current.push('columnAttrClicked is raised');
        updateLog();
    }, [updateLog]);

    return (
        <div>
            <JqxKanban
                theme="material-purple"
                onItemMoved={onItemMoved}
                onColumnCollapsed={onColumnCollapsed}
                onColumnExpanded={onColumnExpanded}
                onItemAttrClicked={onItemAttrClicked}
                onColumnAttrClicked={onColumnAttrClicked}
                // @ts-ignore
                width="100%"
                source={new jqx.dataAdapter(source)}
                columns={columns}
                resources={resources}
            />
            <div ref={myLog} />
        </div>
    );
};

export default App;