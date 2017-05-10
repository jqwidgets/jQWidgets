import React from 'react';
import ReactDOM from 'react-dom';

import JqxTreeGrid from '../../../jqwidgets-react/react_jqxtreegrid.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myTreeGrid.on('bindingComplete', () => {
            this.refs.myTreeGrid.expandRow(2);
        });      
    }
    render() {
        let source =
            {
                dataType: "xml",
                dataFields: [
                    { name: 'EmployeeID', type: 'number' },
                    { name: 'ReportsTo', type: 'number' },
                    { name: 'FirstName', type: 'string' },
                    { name: 'LastName', type: 'string' },
                    { name: 'City', type: 'string' },
                    { name: 'Address', type: 'string' },
                    { name: 'Title', type: 'string' },
                    { name: 'HireDate', type: 'date' },
                    { name: 'BirthDate', type: 'date' }
                ],
                hierarchy:
                {
                    keyDataField: { name: 'EmployeeID' },
                    parentDataField: { name: 'ReportsTo' }
                },
                id: 'EmployeeID',
                root: 'Employees',
                record: 'Employee',
                url: '../sampledata/employees.xml'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns = [
            { text: 'FirstName', dataField: 'FirstName', minWidth: 100, width: 200 },
            { text: 'LastName', dataField: 'LastName', width: 200 },
            { text: 'Title', dataField: 'Title', width: 300 },
            { text: 'Address', dataField: 'Address', width: 200 },
            { text: 'City', dataField: 'City', width: 150 },
            { text: 'Birth Date', dataField: 'BirthDate', cellsFormat: 'd', width: 120 },
            { text: 'Hire Date', dataField: 'HireDate', cellsFormat: 'd', width: 120 }
        ];
        return (
            <JqxTreeGrid ref='myTreeGrid'
                width={850}
                source={dataAdapter}
                pageable={true}
                columnsResize={true}
                columns={columns}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
