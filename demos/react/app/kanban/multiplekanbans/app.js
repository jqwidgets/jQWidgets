import React from 'react';
import ReactDOM from 'react-dom';

import JqxKanban from '../../../jqwidgets-react/react_jqxkanban.js';

class App extends React.Component {
    render() {
        let staff = [
            { id: 0, name: 'No name', image: '../../jqwidgets/styles/images/common.png', common: true },
            { id: 1, name: 'Andrew Fuller', image: '../../images/andrew.png' },
            { id: 2, name: 'Janet Leverling', image: '../../images/janet.png' },
            { id: 3, name: 'Steven Buchanan', image: '../../images/steven.png' }
        ];
        let kanbanColumns = [
            { text: 'Backlog', dataField: 'new', access: 'none', maxItems: 5 },
            { text: 'In Progress', dataField: 'work', access: 'none', maxItems: 5 },
            { text: 'Done', dataField: 'done', access: 'none', maxItems: 5, collapseDirection: 'right' }
        ];
        let kanbanSourceConnected1 = [
            { id: 3, status: 'done', text: 'Combine Orders', tags: 'orders, combine', color: '#5dc3f0', resourceId: 3 },
            { id: 4, status: 'work', text: 'Change Billing Address', tags: 'billing', color: '#6bbd49', resourceId: 1 },
            { id: 5, status: 'new', text: 'One item added to the cart', tags: 'cart', color: '#5dc3f0', resourceId: 3 },
            { id: 6, status: 'work', text: 'Login 404 issue', tags: 'issue, login', color: '#6bbd49' }
        ];
        let kanbanSourceConnected2 = [
            { id: 0, status: 'new', text: 'State opened does not contain items', tags: 'state, open', color: '#5dc3f0', resourceId: 1 },
            { id: 1, status: 'done', text: 'Patch #2043', tags: 'patch', color: '#6bbd49', personId: 2 },
            { id: 2, status: 'work', text: 'Change payment method', tags: 'payment', color: '#6bbd49', resourceId: 2 }
        ];
        return (
            <div>
                <div id='outerBox1'>
                    <h2>Team 1</h2>
                    <div id='kanbanBox1'>
                        <JqxKanban ref='kanbanOne'
                            width={400} height={400} columns={kanbanColumns} resources={staff}
                            source={kanbanSourceConnected1} connectWith={'#kanbanBox2'}
                        />
                    </div>
                </div>
                <div id='outerBox2'>
                    <h2>Team 2</h2>
                    <div id='kanbanBox2'>
                        <JqxKanban ref='kanbanOne'
                            width={400} height={400} columns={kanbanColumns} resources={staff}
                            source={kanbanSourceConnected2} connectWith={'#kanbanBox1'}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));