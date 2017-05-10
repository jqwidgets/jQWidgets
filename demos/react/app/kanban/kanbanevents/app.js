import React from 'react';
import ReactDOM from 'react-dom';

import JqxKanban from '../../../jqwidgets-react/react_jqxkanban.js';

class App extends React.Component {
    componentDidMount() {
        let log = new Array();

        this.refs.myKanban.on('itemMoved', (event) => {
            let args = event.args;
            let itemId = args.itemId;
            let oldParentId = args.oldParentId;
            let newParentId = args.newParentId;
            let itemData = args.itemData;
            let oldColumn = args.oldColumn;
            let newColumn = args.newColumn;
            log.push('itemMoved is raised');
            this.updateLog(log);
        });
        this.refs.myKanban.on('columnCollapsed', (event) => {
            let args = event.args;
            let column = args.column;
            log.push('columnCollapsed is raised');
            this.updateLog(log);
        });
        this.refs.myKanban.on('columnExpanded', (event) => {
            let args = event.args;
            let column = args.column;
            log.push('columnExpanded is raised');
            this.updateLog(log);
        });
        this.refs.myKanban.on('itemAttrClicked', (event) => {
            let args = event.args;
            let itemId = args.itemId;
            let attribute = args.attribute; // template, colorStatus, content, keyword, text, avatar
            log.push('itemAttrClicked is raised');
            this.updateLog(log);
        });
        this.refs.myKanban.on('columnAttrClicked', (event) => {
            let args = event.args;
            let column = args.column;
            let cancelToggle = args.cancelToggle; // false by default. Set to true to cancel toggling dynamically.
            let attribute = args.attribute; // title, button
            log.push('columnAttrClicked is raised');
            this.updateLog(log);
        });
    }
    updateLog(log) {
        let count = 0;
        let str = '';
        for (let i = log.length - 1; i >= 0; i--) {
            str += log[i] + '<br/>';
            count++;
            if (count > 10)
                break;
        }
        document.getElementById('log').innerHTML = str;
    }
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
                    { id: '1161', state: 'new', label: 'Combine Orders', tags: 'orders, combine', hex: '#5dc3f0', resourceId: 3 },
                    { id: '1645', state: 'work', label: 'Change Billing Address', tags: 'billing', hex: '#f19b60', resourceId: 1 },
                    { id: '9213', state: 'new', label: 'One item added to the cart', tags: 'cart', hex: '#5dc3f0', resourceId: 3 },
                    { id: '6546', state: 'done', label: 'Edit Item Price', tags: 'price, edit', hex: '#5dc3f0', resourceId: 4 },
                    { id: '9034', state: 'new', label: 'Login 404 issue', tags: 'issue, login', hex: '#6bbd49' }
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
                { text: 'Backlog', dataField: 'new' },
                { text: 'In Progress', dataField: 'work' },
                { text: 'Done', dataField: 'done' }
            ];
        return (
            <div>
                <JqxKanban ref='myKanban'
                    resources={resourcesAdapterFunc()}
                    source={dataAdapter} columns={columns}
                />
                <div id='log' />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));