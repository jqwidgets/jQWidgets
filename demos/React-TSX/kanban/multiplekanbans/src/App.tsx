import * as React from 'react';
 


import './App.css';

import JqxKanban, { IKanbanProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxkanban';

export interface IState extends IKanbanProps {
    source2: IKanbanProps["source"]
}

class App extends React.PureComponent<{}, IState> {

    constructor(props: {}) {
        super(props);

        this.state = {
            columns: [
                { text: 'Backlog', dataField: 'new', maxItems: 5 },
                { text: 'In Progress', dataField: 'work', maxItems: 5 },
                { text: 'Done', dataField: 'done', maxItems: 5, collapseDirection: 'right' }
            ],
            resources: [
                { id: 0, name: 'No name', image: 'https://www.jqwidgets.com/react/images/andrew.png', common: true },
                { id: 1, name: 'Andrew Fuller', image: 'https://www.jqwidgets.com/react/images/andrew.png' },
                { id: 2, name: 'Janet Leverling', image: 'https://www.jqwidgets.com/react/images/janet.png' },
                { id: 3, name: 'Steven Buchanan', image: 'https://www.jqwidgets.com/react/images/steven.png' }
            ],
            source: [
                { id: 3, status: 'done', text: 'Combine Orders', tags: 'orders, combine', color: '#5dc3f0', resourceId: 3 },
                { id: 4, status: 'work', text: 'Change Billing Address', tags: 'billing', color: '#6bbd49', resourceId: 1 },
                { id: 5, status: 'new', text: 'One item added to the cart', tags: 'cart', color: '#5dc3f0', resourceId: 3 },
                { id: 6, status: 'work', text: 'Login 404 issue', tags: 'issue, login', color: '#6bbd49' }
            ],
            source2: [
                { id: 0, status: 'new', text: 'State opened does not contain items', tags: 'state, open', color: '#5dc3f0', resourceId: 1 },
                { id: 1, status: 'done', text: 'Patch #2043', tags: 'patch', color: '#6bbd49', personId: 2 },
                { id: 2, status: 'work', text: 'Change payment method', tags: 'payment', color: '#6bbd49', resourceId: 2 }
            ]
        }
    }

    public render() {
        return (
            <div>
                <div id="outerBox1">
                    <h2>Team 1</h2>
                    <div id="kanbanBox1">
                        <JqxKanban theme={'material-purple'}
                            width={400} height={400} columns={this.state.columns} resources={this.state.resources}
                            source={this.state.source} connectWith={'#kanbanBox2'} />
                    </div>
                </div>

                <div id="outerBox2">
                    <h2>Team 2</h2>
                    <div id="kanbanBox2">
                        <JqxKanban theme={'material-purple'}
                            width={400} height={400} columns={this.state.columns} resources={this.state.resources}
                            source={this.state.source2} connectWith={'#kanbanBox1'} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;