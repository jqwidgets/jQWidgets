import React from 'react';
import ReactDOM from 'react-dom';

import JqxTreeGrid from '../../../jqwidgets-react/react_jqxtreegrid.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myTreeGrid.expandRow(1);
        this.refs.myTreeGrid.expandRow(2);
    }
    render () {
        // prepare the data
        let data = [
	            {
	                'id': '1', 'name': 'Corporate Headquarters', 'budget': '1230000', 'location': 'Las Vegas',
	                'children':
                     [
                         {
                             'id': '2', 'name': 'Finance Division', 'budget': '423000', 'location': 'San Antonio',
                             'children':
                             [
                                 { 'id': '3', 'name': 'Accounting Department', 'budget': '113000', 'location': 'San Antonio' },
                                 {
                                     'id': '4', 'name': 'Investment Department', 'budget': '310000', 'location': 'San Antonio',
                                     'children':
                                     [
                                         { 'id': '5', 'name': 'Banking Office', 'budget': '240000', 'location': 'San Antonio' },
                                         { 'id': '6', 'name': 'Bonds Office', 'budget': '70000', 'location': 'San Antonio' },
                                     ]
                                 }
                             ]
                         },
                         {
                             'id': '7', 'name': 'Operations Division', 'budget': '600000', 'location': 'Miami',
                             'children':
                             [
                                 { 'id': '8', 'name': 'Manufacturing Department', 'budget': '300000', 'location': 'Miami' },
                                 { 'id': '9', 'name': 'Public Relations Department', 'budget': '200000', 'location': 'Miami' },
                                 { 'id': '10', 'name': 'Sales Department', 'budget': '100000', 'location': 'Miami' }
                             ]
                         },
                         { 'id': '11', 'name': 'Research Division', 'budget': '200000', 'location': 'Boston' }
                     ]
	            }
        ];
        let source = {
            dataType: 'json',
            dataFields: [
                 { name: 'name', type: 'string' },
                 { name: 'budget', type: 'number' },
                 { name: 'id', type: 'number' },
                 { name: 'children', type: 'array' },
                 { name: 'location', type: 'string' }
            ],
            hierarchy:
                {
                    root: 'children'
                },
            localData: data,
            id: 'id'
        };
        let dataAdapter = new $.jqx.dataAdapter(source, {
            loadComplete: () => {
            }
        });
        // create Tree Grid
        let columns = [
            { text: 'Name', columnGroup: 'JSTCorp', align: 'center', dataField: 'name', width: 300 },
            { text: 'Budget', columnGroup: 'JSTCorp', cellsAlign: 'center', align: 'center', dataField: 'budget', cellsFormat: 'c2', width: 250 },
            { text: 'Location', columnGroup: 'JSTCorp', dataField: 'location', cellsAlign: 'center', align: 'center', width: 250 }                
        ];
        let columnGroups = [{ text: 'JST Corp.', name: 'JSTCorp', align: 'center' }];
        return (
            <JqxTreeGrid ref='myTreeGrid'
                source={dataAdapter}
                altRows={true}
                columnsResize={true}
                columns={columns}
                columnGroups={columnGroups}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
