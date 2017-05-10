import React from 'react';
import ReactDOM from 'react-dom';

import JqxTreeGrid from '../../../jqwidgets-react/react_jqxtreegrid.js';
import JqxMenu from '../../../jqwidgets-react/react_jqxmenu.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myTreeGrid.expandRow(32);

        this.refs.myTreeGrid.on('contextmenu', (event) => {
            return false;
        });
        
        this.refs.myTreeGrid.on('rowClick', (event) => {
            let args = event.args;
            if (args.originalEvent.button == 2) {
                let scrollTop = window.scrollX;
                let scrollLeft = window.scrollY;
                this.refs.myMenu.open(parseInt(event.args.originalEvent.clientX) + 5 + scrollLeft, parseInt(event.args.originalEvent.clientY) + 5 + scrollTop);
                return false;
            }
        });

        this.refs.myMenu.on('itemclick', (event) => {
            let args = event.args;
            let selection = this.refs.myTreeGrid.getSelection();
            let rowid = selection[0].uid
            if ($.trim($(args).text()) == "Edit Selected Row") {
                this.refs.myTreeGrid.beginRowEdit(rowid);
            } else {
                this.refs.myTreeGrid.deleteRow(rowid);
            }
        });
    }
    render () {
        // prepare the data
        let source =
        {
            dataType: 'csv',
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
        // create Tree Grid
        let columns = [
            { text: 'FirstName', dataField: 'FirstName', minWidth: 100, width: 200 },
            { text: 'LastName', dataField: 'LastName', width: 200 },
            { text: 'Department Name', dataField: 'DepartmentName', width: 200 },
            { text: 'Title', dataField: 'Title', width: 300 },
            { text: 'Birth Date', dataField: 'BirthDate', cellsFormat: 'd', width: 120 },
            { text: 'Hire Date', dataField: 'HireDate', cellsFormat: 'd', width: 120 },
            { text: 'Phone', dataField: 'Phone', cellsFormat: 'd', width: 120 }
        ];
        return (
            <div>

                <JqxTreeGrid ref='myTreeGrid'
                    width={850}
                    source={dataAdapter}
                    columnsResize={true}
                    columns={columns}
                />

                <JqxMenu ref='myMenu' 
                    width={200} height={58}
                    autoOpenPopup={false} mode={'popup'}
                >
                    <ul>
                        <li>Edit Selected Row</li>
                        <li>Delete Selected Row</li>
                    </ul>
                </JqxMenu>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
