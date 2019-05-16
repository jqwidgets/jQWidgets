import * as React from 'react';
 


import './App.css';

import JqxKanban, { IKanbanProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxkanban';

class App extends React.PureComponent<{}, IKanbanProps> {

    constructor(props: {}) {
        super(props);

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

        this.state = {
            columns: [
                { text: 'Backlog', dataField: 'new' },
                { text: 'In Progress', dataField: 'work' },
                { text: 'Done', dataField: 'done' }
            ],
            resources: resourcesAdapterFunc(),
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <JqxKanban theme={'material-purple'}
                width={'100%'} height={'70%'} source={this.state.source}
                columns={this.state.columns} resources={this.state.resources} />
        );
    }   
}

export default App;