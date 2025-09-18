import * as React from 'react';

import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

const columns: any[] = [
    { dataField: 'FirstName', text: 'FirstName', width: 160 },
    { dataField: 'LastName', text: 'LastName', width: 160 },
    { dataField: 'City', text: 'City', width: 120 },
    { dataField: 'Country', text: 'Country' }
];

const employees: any[] = [
    { "EmployeeID": 1, "FirstName": "Nancy", "LastName": "Davolio", "ReportsTo": 2, "Country": "USA", "Title": "Sales Representative", "HireDate": "1992-05-01 00:00:00", "BirthDate": "1948-12-08 00:00:00", "City": "Seattle", "Address": "507 - 20th Ave. E.Apt. 2A" },
    { "EmployeeID": 2, "FirstName": "Andrew", "LastName": "Fuller", "ReportsTo": null, "Country": "USA", "Title": "Vice President, Sales", "HireDate": "1992-08-14 00:00:00", "BirthDate": "1952-02-19 00:00:00", "City": "Tacoma", "Address": "908 W. Capital Way" },
    { "EmployeeID": 3, "FirstName": "Janet", "LastName": "Leverling", "ReportsTo": 2, "Country": "USA", "Title": "Sales Representative", "HireDate": "1992-04-01 00:00:00", "BirthDate": "1963-08-30 00:00:00", "City": "Kirkland", "Address": "722 Moss Bay Blvd." },
    { "EmployeeID": 4, "FirstName": "Margaret", "LastName": "Peacock", "ReportsTo": 2, "Country": "USA", "Title": "Sales Representative", "HireDate": "1993-05-03 00:00:00", "BirthDate": "1937-09-19 00:00:00", "City": "Redmond", "Address": "4110 Old Redmond Rd." },
    { "EmployeeID": 5, "FirstName": "Steven", "LastName": "Buchanan", "ReportsTo": 2, "Country": "UK", "Title": "Sales Manager", "HireDate": "1993-10-17 00:00:00", "BirthDate": "1955-03-04 00:00:00", "City": "London", "Address": "14 Garrett Hill" },
    { "EmployeeID": 6, "FirstName": "Michael", "LastName": "Suyama", "ReportsTo": 5, "Country": "UK", "Title": "Sales Representative", "HireDate": "1993-10-17 00:00:00", "BirthDate": "1963-07-02 00:00:00", "City": "London", "Address": "Coventry House Miner Rd." },
    { "EmployeeID": 7, "FirstName": "Robert", "LastName": "King", "ReportsTo": 5, "Country": "UK", "Title": "Sales Representative", "HireDate": "1994-01-02 00:00:00", "BirthDate": "1960-05-29 00:00:00", "City": "London", "Address": "Edgeham Hollow Winchester Way" },
    { "EmployeeID": 8, "FirstName": "Laura", "LastName": "Callahan", "ReportsTo": 2, "Country": "USA", "Title": "Inside Sales Coordinator", "HireDate": "1994-03-05 00:00:00", "BirthDate": "1958-01-09 00:00:00", "City": "Seattle", "Address": "4726 - 11th Ave. N.E." },
    { "EmployeeID": 9, "FirstName": "Anne", "LastName": "Dodsworth", "ReportsTo": 5, "Country": "UK", "Title": "Sales Representative", "HireDate": "1994-11-15 00:00:00", "BirthDate": "1966-01-27 00:00:00", "City": "London", "Address": "7 Houndstooth Rd." }
];

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
    hierarchy: {
        keyDataField: { name: 'EmployeeID' },
        parentDataField: { name: 'ReportsTo' }
    },
    id: 'EmployeeID',
    localData: employees
};

const dataAdapter: any = new jqx.dataAdapter(source);

const columnDropdownSource = ['First Name', 'Last Name', 'City', 'Country'];
const sortOrderSource = ['Ascending', 'Descending'];

function App() {
    const treeGridRef = React.useRef<JqxTreeGrid>(null);
    const columnNameRef = React.useRef<JqxDropDownList>(null);
    const sortOrderRef = React.useRef<JqxDropDownList>(null);

    React.useEffect(() => {
        setTimeout(() => {
            treeGridRef.current?.expandRow(2);
        }, 0);
    }, []);

    const clickSort = React.useCallback(() => {
        const columnIndex = columnNameRef.current?.getSelectedIndex() ?? 0;
        const order = sortOrderRef.current?.getSelectedIndex() === 0 ? 'asc' : 'desc';
        treeGridRef.current?.sortBy(columns[columnIndex].dataField, order);
    }, []);

    const clickClear = React.useCallback(() => {
        treeGridRef.current?.sortBy(null);
    }, []);

    return (
        <div>
            <JqxTreeGrid
                theme="material-purple"
                ref={treeGridRef}
                width="100%"
                sortable={true}
                source={dataAdapter}
                columns={columns}
            />
            <div style={{ float: 'left', marginLeft: 10 }}>
                <table>
                    <tbody>
                        <tr>
                            <td align="right"><div><strong>Settings</strong></div></td>
                            <td align="left" />
                        </tr>
                        <tr>
                            <td align="right">Column:</td>
                            <td align="left">
                                <JqxDropDownList
                                    theme="material-purple"
                                    ref={columnNameRef}
                                    width={100}
                                    source={columnDropdownSource}
                                    selectedIndex={0}
                                    autoDropDownHeight={true}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td align="right">Sort Order:</td>
                            <td align="left">
                                <JqxDropDownList
                                    theme="material-purple"
                                    ref={sortOrderRef}
                                    width={100}
                                    source={sortOrderSource}
                                    selectedIndex={0}
                                    autoDropDownHeight={true}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td align="right" />
                            <td align="left">
                                <JqxButton theme="material-purple" style={{ float: 'left' }} onClick={clickSort}>Sort</JqxButton>
                                <JqxButton theme="material-purple" style={{ float: 'left', marginLeft: 5 }} onClick={clickClear}>Clear</JqxButton>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App;