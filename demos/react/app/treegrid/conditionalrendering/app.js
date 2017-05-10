import React from 'react';
import ReactDOM from 'react-dom';

import JqxTreeGrid from '../../../jqwidgets-react/react_jqxtreegrid.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myTreeGrid.expandRow(1);
        this.refs.myTreeGrid.expandRow(2);
        this.refs.myTreeGrid.expandRow(7);
    }
    render () {
        let cellsRendererFunction = (row, dataField, cellValueInternal, rowData, cellText) => {
            let cellValue = rowData[dataField];
            if (cellValue < 400000) {
                return "<span style='color: #e91b1b;'>" + cellText + "</span><span class='red-arrow-down'></span>";
            }
            return "<span style='color: #028b2b;'>" + cellText + "</span><span class='green-arrow-up'></span>";
        }
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
        let source =
         {
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
            { text: 'ID', dataField: 'id', width: 150 },
            {
                text: 'Name', dataField: 'name', width: 270
            },
            {
                text: 'Location', dataField: 'location'
            },
            {
                text: 'Budget', align: 'right', cellsRenderer: cellsRendererFunction, cellsAlign: 'right', cellClassName: 'conditionalFormatting', cellsFormat: 'c2', dataField: 'budget', width: 200
            }
        ];
        return (
            <JqxTreeGrid ref='myTreeGrid'
                width={850}
                source={dataAdapter}
                altRows={true}
                enableHover={false}
                editable={true}
                selectionMode={'none'}
                columns={columns}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
