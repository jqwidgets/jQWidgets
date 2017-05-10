import React from 'react';
import ReactDOM from 'react-dom';

import JqxTreeGrid from '../../../jqwidgets-react/react_jqxtreegrid.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';
import JqxListBox from '../../../jqwidgets-react/react_jqxlistbox.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myTreeGrid.expandRow(1);
        this.refs.myTreeGrid.expandRow(2);

        this.refs.jqxListBox.on('checkChange', (event) => {
            this.refs.myTreeGrid.beginUpdate();
            if (event.args.checked) {
                this.refs.myTreeGrid.showColumn(event.args.value);
            }
            else {
                this.refs.myTreeGrid.hideColumn(event.args.value);
            }
            this.refs.myTreeGrid.endUpdate();
        });
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
            { text: "Name",  align: "center", dataField: "name", width: 240 },
            { text: "Budget", cellsAlign: "center", align: "center", dataField: "budget", cellsFormat: "c2", width: 200 },
            { text: "Location", dataField: "location", cellsAlign: "center", align: "center", hidden: true, width: 200 }
        ];
        let listSource = [{ label: 'Budget', value: 'budget', checked: true }, { label: 'Location', value: 'location', checked: false }];
        return (
             <div>

                <JqxListBox ref='jqxListBox' source={listSource} width={120} height={200} checkboxes={true} style={{ float: 'left' }} />

                <JqxTreeGrid ref='myTreeGrid' style={{ float: 'left', marginLeft: '20px' }}
                    source={dataAdapter}
                    altRows={true}
                    showHeader={true}
                    columns={columns}
                />

             </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
