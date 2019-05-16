import * as React from 'react';
 


import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

class App extends React.PureComponent<{}, ITreeGridProps> {
    private myTreeGrid = React.createRef<JqxTreeGrid>();

    constructor(props: {}) {
        super(props);

        const employees: any[] = [{ "EmployeeID": 1, "FirstName": "Nancy", "LastName": "Davolio", "ReportsTo": 2, "Country": "USA", "Title": "Sales Representative", "HireDate": "1992-05-01 00:00:00", "BirthDate": "1948-12-08 00:00:00", "City": "Seattle", "Address": "507 - 20th Ave. E.Apt. 2A" }, { "EmployeeID": 2, "FirstName": "Andrew", "LastName": "Fuller", "ReportsTo": null, "Country": "USA", "Title": "Vice President, Sales", "HireDate": "1992-08-14 00:00:00", "BirthDate": "1952-02-19 00:00:00", "City": "Tacoma", "Address": "908 W. Capital Way" }, { "EmployeeID": 3, "FirstName": "Janet", "LastName": "Leverling", "ReportsTo": 2, "Country": "USA", "Title": "Sales Representative", "HireDate": "1992-04-01 00:00:00", "BirthDate": "1963-08-30 00:00:00", "City": "Kirkland", "Address": "722 Moss Bay Blvd." }, { "EmployeeID": 4, "FirstName": "Margaret", "LastName": "Peacock", "ReportsTo": 2, "Country": "USA", "Title": "Sales Representative", "HireDate": "1993-05-03 00:00:00", "BirthDate": "1937-09-19 00:00:00", "City": "Redmond", "Address": "4110 Old Redmond Rd." }, { "EmployeeID": 5, "FirstName": "Steven", "LastName": "Buchanan", "ReportsTo": 2, "Country": "UK", "Title": "Sales Manager", "HireDate": "1993-10-17 00:00:00", "BirthDate": "1955-03-04 00:00:00", "City": "London", "Address": "14 Garrett Hill" }, { "EmployeeID": 6, "FirstName": "Michael", "LastName": "Suyama", "ReportsTo": 5, "Country": "UK", "Title": "Sales Representative", "HireDate": "1993-10-17 00:00:00", "BirthDate": "1963-07-02 00:00:00", "City": "London", "Address": "Coventry House Miner Rd." }, { "EmployeeID": 7, "FirstName": "Robert", "LastName": "King", "ReportsTo": 5, "Country": "UK", "Title": "Sales Representative", "HireDate": "1994-01-02 00:00:00", "BirthDate": "1960-05-29 00:00:00", "City": "London", "Address": "Edgeham Hollow Winchester Way" }, { "EmployeeID": 8, "FirstName": "Laura", "LastName": "Callahan", "ReportsTo": 2, "Country": "USA", "Title": "Inside Sales Coordinator", "HireDate": "1994-03-05 00:00:00", "BirthDate": "1958-01-09 00:00:00", "City": "Seattle", "Address": "4726 - 11th Ave. N.E." }, { "EmployeeID": 9, "FirstName": "Anne", "LastName": "Dodsworth", "ReportsTo": 5, "Country": "UK", "Title": "Sales Representative", "HireDate": "1994-11-15 00:00:00", "BirthDate": "1966-01-27 00:00:00", "City": "London", "Address": "7 Houndstooth Rd." }];

        const source: any = {
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
            dataType: 'json',
            hierarchy:
            {
                keyDataField: { name: 'EmployeeID' },
                parentDataField: { name: 'ReportsTo' }
            },
            id: 'EmployeeID',
            localData: employees
        };

        const dataAdapter: any = new jqx.dataAdapter(source);

        this.state = {
            columns: [
                { columnGroup: 'Name', dataField: 'FirstName', minWidth: 100, text: 'FirstName', width: 180 },
                { columnGroup: 'Name', dataField: 'LastName', text: 'LastName', width: 200 },
                { dataField: 'Title', text: 'Title', width: 300 },
                { cellsFormat: 'd', dataField: 'BirthDate', text: 'Birth Date', width: 120 },
                { cellsFormat: 'd', dataField: 'HireDate', text: 'Hire Date', width: 120 },
                { dataField: 'Address', text: 'Address', width: 250 },
                { dataField: 'City', text: 'City', width: 120 },
                { dataField: 'Country', text: 'Country', width: 200 }
            ],
            ready: (): void => {
                setTimeout(() => {
                    this.myTreeGrid.current!.expandRow(2);
                    this.myTreeGrid.current!.selectRow(2);
                    this.myTreeGrid.current!.focus();
                });
            },
            source: dataAdapter
        }
    }

    public render() {
        return (
            <div>
                    <JqxTreeGrid theme={'material-purple'} ref={this.myTreeGrid}
                        // @ts-ignore
                        width={'100%'}
                        editable={true}
                        source={this.state.source}
                        columns={this.state.columns}
                        ready={this.state.ready}
                    />

                <div style={{ fontFamily: 'Verdana', fontSize: '12px', width: '670px' }}>
                    <ul>
                        <li><b>Left Arrow</b> key - on an expanded record, collapses the record.</li>
                        <li><b>Left Arrow</b> key - on a collapsed or end record moves focus to the record's parent.</li>
                        <li><b>Right Arrow</b> key - on a collapsed record expands the record.</li>
                        <li><b>Right Arrow</b> key - on an expanded record, moves to the first child record, or does nothing on an end record.</li>
                        <li><b>Up Arrow</b> key is pressed - Selects the row above.</li>
                        <li><b>Down Arrow</b> key is pressed - Selects the row below.</li>
                        <li><b>Page Up/Down</b> is pressed - Navigate Up or Down with one page.</li>
                        <li><b>Home/End</b> is pressed - Navigate to the first or last row on the current page.</li>
                        <li><b>Enter</b> key is pressed - Saves the Edited Row.</li>
                        <li><b>Esc</b> key is pressed - Closes all Editors and Cancels the changes.</li>
                        <li><b>F2</b> key is pressed -  Enters edit mode for the currently selected row.</li>
                        <li><b>Shift+Arrow</b> key extends the selection.</li>
                        <li><b>Shift</b> extends the selection when an end user clicks on a row.</li>
                        <li><b>Ctrl</b> key is pressed - extends the selection when an end user clicks on a row. </li>
                        <li><b>Space</b> key is pressed - Checks/Unchecks the selected record(s). </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;
