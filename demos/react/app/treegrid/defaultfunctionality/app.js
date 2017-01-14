import React from 'react';
import ReactDOM from 'react-dom';

import JqxTreeGrid from '../../../jqwidgets-react/react_jqxtreegrid.js';

class App extends React.Component {
    componentDidMount () {
       setTimeout(() =>
       {
         this.refs.myTreeGrid.expandRow(32);
       },10)
    }
    render () {
        let source =
        {
            dataType: "csv",
            dataFields: [
                { name: 'EmployeeKey', type: 'number' },
                { name: 'ParentEmployeeKey', type: 'number' },
                { name: 'FirstName', type: 'string' },
                { name: 'LastName', type: 'string' },
                { name: 'Title', type: 'string' },
                { name: 'HireDate', type: 'date' },
                { name: 'BirthDate', type: 'date' },
                { name: 'Phone', type: 'string' },
                { name: 'Gender', type: 'string' },
                { name: 'DepartmentName', type: 'string' }
            ],
            hierarchy:
            {
                keyDataField: { name: 'EmployeeKey' },
                parentDataField: { name: 'ParentEmployeeKey' }
            },
            id: 'EmployeeKey',
            url: '../sampledata/employeesadv.csv'
        };
        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns=
        [
            { text: 'FirstName', dataField: 'FirstName', minWidth: 100, width: 200 },
            { text: 'LastName',  dataField: 'LastName', width: 200 },
            { text: 'Department Name', dataField: 'DepartmentName', width: 150 },
            { text: 'Title', dataField: 'Title', width: 300 },
            { text: 'Birth Date', dataField: 'BirthDate', cellsFormat: 'd', width: 120 },
            { text: 'Hire Date', dataField: 'HireDate', cellsFormat: 'd', width: 120 },
            { text: 'Phone', dataField: 'Phone', cellsFormat: 'd', width: 120 }
        ];
        return (
              <JqxTreeGrid ref='myTreeGrid'
                width={850} source={dataAdapter} pageable={true}
                columnsResize={true} columns={columns}
              />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
