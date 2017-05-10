import React from 'react';
import ReactDOM from 'react-dom';

import JqxTreeGrid from '../../../jqwidgets-react/react_jqxtreegrid.js';

class App extends React.Component {
    render() {
        let source =
            {
                dataType: 'json',
                dataFields: [
                    { name: 'EmployeeID', type: 'number' },
                    { name: 'ReportsTo', type: 'number' },
                    { name: 'FirstName', type: 'string' },
                    { name: 'LastName', type: 'string' },
                    { name: 'Country', type: 'string' },
                    { name: 'City', type: 'string' },
                    { name: 'Address', type: 'string' },
                    { name: 'Title', type: 'string' },
                    { name: 'HireDate', type: 'date' },
                    { name: 'BirthDate', type: 'date' }
                ],
                timeout: 10000,
                hierarchy:
                {
                    keyDataField: { name: 'EmployeeID' },
                    parentDataField: { name: 'ReportsTo' }
                },
                id: 'EmployeeID',
                root: 'value',
                url: 'http://services.odata.org/V3/Northwind/Northwind.svc/Employees?$format=json&$callback=?'
            };

        let virtualModeCreateRecords = (expandedRecord, done) => {

            let dataAdapter = new $.jqx.dataAdapter(source,
                {
                    formatData: (data) => {
                        if (expandedRecord == null) {
                            data.$filter = '(ReportsTo eq null)'
                        }
                        else {
                            data.$filter = '(ReportsTo eq ' + expandedRecord.EmployeeID + ')'
                        }
                        return data;
                    },
                    loadComplete: () => {
                        done(dataAdapter.records);
                    },
                    loadError: (xhr, status, error) => {
                        done(false);
                        throw new Error('http://services.odata.org: ' + error.toString());
                    }
                }
            );
            dataAdapter.dataBind();
        };

        let virtualModeRecordCreating = (record) => {
            // record is creating.
        };

        let columns = [
            { text: 'FirstName', columnGroup: 'Name', dataField: 'FirstName', width: 150 },
            { text: 'LastName', columnGroup: 'Name', dataField: 'LastName', width: 150 },
            { text: 'Title', dataField: 'Title', width: 200 },
            { text: 'Birth Date', dataField: 'BirthDate', cellsFormat: 'd' }
        ];
        return (
            <div>
                <h3 style={{ fontSize: 16, fontFamily: 'Verdana' }}>Data Source: 'http://services.odata.org'</h3>
                <JqxTreeGrid
                    width={800} columns={columns}
                    virtualModeCreateRecords={virtualModeCreateRecords}
                    virtualModeRecordCreating={virtualModeRecordCreating}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
