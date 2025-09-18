import * as React from 'react';
import { useRef, useMemo, useCallback } from 'react';
import './App.css';
import JqxKanban, { IKanbanProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxkanban';
import JqxSplitter, { ISplitterProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxsplitter';

const App = () => {
    const myKanbanOne = useRef<JqxKanban>(null);
    const myKanbanTwo = useRef<JqxKanban>(null);
    const myKanbanThree = useRef<JqxKanban>(null);

    const fields = useMemo(() => [
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
            { state: 'new', label: 'Combine Orders', tags: 'orders, combine', hex: '#5dc3f0', resourceId: 3 },
            { state: 'new', label: 'Change Billing Address', tags: 'billing', hex: '#f19b60', resourceId: 1 },
            { state: 'new', label: 'One item added to the cart', tags: 'cart', hex: '#5dc3f0', resourceId: 3 },
            { state: 'new', label: 'Edit Item Price', tags: 'price, edit', hex: '#5dc3f0', resourceId: 4 },
            { state: 'new', label: 'Login 404 issue', tags: 'issue, login', hex: '#6bbd49' }
        ]
    }), [fields]);

    const source2 = useMemo(() => ({
        dataFields: fields,
        dataType: 'array',
        localData: [
            { state: 'ready', label: 'Logout issue', tags: 'logout, issue', hex: '#5dc3f0', resourceId: 7 },
            { state: 'ready', label: 'Remember password issue', tags: 'password, issue', hex: '#6bbd49', resourceId: 8 },
            { state: 'ready', label: 'Cart calculation issue', tags: 'cart, calculation', hex: '#f19b60', resourceId: 9 },
            { state: 'ready', label: 'Remove topic issue', tags: 'topic, issue', hex: '#6bbd49' }
        ]
    }), [fields]);

    const source3 = useMemo(() => ({
        dataFields: fields,
        dataType: 'array',
        localData: [
            { state: 'done', label: 'Delete orders', tags: 'orders, combine', hex: '#f19b60', resourceId: 4 },
            { state: 'work', label: 'Add New Address', tags: 'address', hex: '#6bbd49', resourceId: 5 },
            { state: 'new', label: 'Rename items', tags: 'rename', hex: '#5dc3f0', resourceId: 6 },
            { state: 'work', label: 'Update cart', tags: 'cart, update', hex: '#6bbd49' }
        ]
    }), [fields]);

    const resourcesAdapterFunc = useCallback((): any => {
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

    const columnRenderer = useCallback((element: any, collapsedElement: any, column: any): void => {
        if (element[0]) {
            const headerStatus = element[0].getElementsByClassName('jqx-kanban-column-header-status')[0];                
            setTimeout(() => {
                if (myKanbanOne.current) {
                    const columnItems = myKanbanOne.current.getColumnItems(column.dataField).length;
                    headerStatus.innerHTML = ' (' + columnItems + '/' + column.maxItems + ')';
                }
            }, 100);
        }
    }, []);

    const columnRenderer2 = useCallback((element: any, collapsedElement: any, column: any): void => {
        if (element[0]) {
            const headerStatus = element[0].getElementsByClassName('jqx-kanban-column-header-status')[0];
            const collapsedHeaderStatus = collapsedElement[0].getElementsByClassName('jqx-kanban-column-header-status')[0];
            setTimeout(() => {
                if (myKanbanTwo.current) {
                    const columnItems = myKanbanTwo.current.getColumnItems(column.dataField).length;
                    headerStatus.innerHTML = ' (' + columnItems + '/' + column.maxItems + ')';
                    collapsedHeaderStatus.innerHTML = ' (' + columnItems + '/' + column.maxItems + ')';
                }
            }, 100);
        }
    }, []);

    const columnRenderer3 = useCallback((element: any, collapsedElement: any, column: any): void => {
        if (element[0]) {
            const headerStatus = element[0].getElementsByClassName('jqx-kanban-column-header-status')[0];                
            setTimeout(() => {
                if (myKanbanOne.current) {
                    const columnItems = myKanbanOne.current.getColumnItems(column.dataField).length;
                    headerStatus.innerHTML = ' (' + columnItems + '/' + column.maxItems + ')';
                }
            }, 100);
        }
    }, []);

    const columns = useMemo(() => [
        { text: 'Backlog', dataField: 'new', maxItems: 10 }
    ], []);
    const columns2 = useMemo(() => [
        { text: 'Ready', dataField: 'ready', maxItems: 10 }
    ], []);
    const columns3 = useMemo(() => [
        { text: 'Backlog', dataField: 'new', maxItems: 5 },
        { text: 'In Progress', dataField: 'work', maxItems: 5 },
        { text: 'Done', dataField: 'done', maxItems: 5 }
    ], []);
    const mainSplitterPanels = useMemo(() => [{ size: 250, min: 100 }, { min: 250 }], []);
    const rightSplitterPanels = useMemo(() => [{ min: 200, size: 350, collapsible: false }, { min: 200 }], []);
    const resources = useMemo(() => resourcesAdapterFunc(), [resourcesAdapterFunc]);
    const resources2 = useMemo(() => resourcesAdapterFunc(), [resourcesAdapterFunc]);
    const resources3 = useMemo(() => resourcesAdapterFunc(), [resourcesAdapterFunc]);
    const kanbanSource = useMemo(() => new jqx.dataAdapter(source), [source]);
    const kanbanSource2 = useMemo(() => new jqx.dataAdapter(source2), [source2]);
    const kanbanSource3 = useMemo(() => new jqx.dataAdapter(source3), [source3]);

    return (
        <JqxSplitter theme={'material-purple'} width={850} height={600} panels={mainSplitterPanels}>
            <div>
                <JqxKanban
                    theme={'material-purple'}
                    className="kanban1"
                    ref={myKanbanOne}
                   