import React from 'react';
import ReactDOM from 'react-dom';

import JqxKanban from '../../../jqwidgets-react/react_jqxkanban.js';

class App extends React.Component {
    render() {
        let fields = [
            { name: 'id', type: 'string' },
            { name: 'status', map: 'state', type: 'string' },
            { name: 'text', map: 'label', type: 'string' },
            { name: 'tags', type: 'string' },
            { name: 'color', map: 'hex', type: 'string' },
            { name: 'resourceId', type: 'number' }
        ];
        let source =
            {
                localData: [
                    { id: '1161', state: 'new', label: 'Make a new Dashboard', tags: 'dashboard', hex: '#36c7d0', resourceId: 3 },
                    { id: '1645', state: 'work', label: 'Prepare new release', tags: 'release', hex: '#ff7878', resourceId: 1 },
                    { id: '9213', state: 'new', label: 'One item added to the cart', tags: 'cart', hex: '#96c443', resourceId: 3 },
                    { id: '6546', state: 'done', label: 'Edit Item Price', tags: 'price, edit', hex: '#ff7878', resourceId: 4 },
                    { id: '9034', state: 'new', label: 'Login 404 issue', tags: 'issue, login', hex: '#96c443' }
                ],
                dataType: 'array',
                dataFields: fields
            };
        let dataAdapter = new $.jqx.dataAdapter(source);
        let resourcesAdapterFunc = () => {
            let resourcesSource =
                {
                    localData: [
                        { id: 0, name: 'No name', image: '../../jqwidgets/styles/images/common.png', common: true },
                        { id: 1, name: 'Andrew Fuller', image: '../../images/andrew.png' },
                        { id: 2, name: 'Janet Leverling', image: '../../images/janet.png' },
                        { id: 3, name: 'Steven Buchanan', image: '../../images/steven.png' },
                        { id: 4, name: 'Nancy Davolio', image: '../../images/nancy.png' },
                        { id: 5, name: 'Michael Buchanan', image: '../../images/Michael.png' },
                        { id: 6, name: 'Margaret Buchanan', image: '../../images/margaret.png' },
                        { id: 7, name: 'Robert Buchanan', image: '../../images/robert.png' },
                        { id: 8, name: 'Laura Buchanan', image: '../../images/Laura.png' },
                        { id: 9, name: 'Laura Buchanan', image: '../../images/Anne.png' }
                    ],
                    dataType: 'array',
                    dataFields: [
                        { name: 'id', type: 'number' },
                        { name: 'name', type: 'string' },
                        { name: 'image', type: 'string' },
                        { name: 'common', type: 'boolean' }
                    ]
                };
            let resourcesDataAdapter = new $.jqx.dataAdapter(resourcesSource);
            return resourcesDataAdapter;
        }

        let columns =
            [
                { text: 'Backlog', dataField: 'new', maxItems: 4 },
                { text: 'In Progress', dataField: 'work', maxItems: 2 },
                { text: 'Done', dataField: 'done', collapsible: false, maxItems: 5 }
            ];

        let columnRenderer = (element, collapsedElement, column) => {
            setTimeout(() => {
                let columnItems = this.refs.myKanban.getColumnItems(column.dataField).length;
                // update header's status.
                element.find('.jqx-kanban-column-header-status').html(' (' + columnItems + '/' + column.maxItems + ')');
                // update collapsed header's status.
                collapsedElement.find('.jqx-kanban-column-header-status').html(' (' + columnItems + '/' + column.maxItems + ')');
            });
        };
        return (
            <JqxKanban ref='myKanban'
                resources={resourcesAdapterFunc()} source={dataAdapter}
                columns={columns} columnRenderer={columnRenderer}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));