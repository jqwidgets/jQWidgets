import * as React from 'react';
 


import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

class App extends React.PureComponent<{}, ITreeGridProps> {
    private myTreeGrid = React.createRef<JqxTreeGrid>();
    private myLog = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);

        const employees: any[] = [{ "Address": "908 W. Capital Way", "BirthDate": "1952-02-19 00:00:00", "City": "Tacoma", "Country": "USA", "EmployeeID": 2, "FirstName": "Andrew", "HireDate": "1992-08-14 00:00:00", "LastName": "Fuller", "Title": "Vice President, Sales", "children": [{ "EmployeeID": 8, "icon": "https://www.jqwidgets.com/react/images/woman.png", "FirstName": "Laura", "LastName": "Callahan", "Country": "USA", "Title": "Inside Sales Coordinator", "HireDate": "1994-03-05 00:00:00", "BirthDate": "1958-01-09 00:00:00", "City": "Seattle", "Address": "4726 - 11th Ave. N.E." }, { "EmployeeID": 1, "icon": "https://www.jqwidgets.com/react/images/woman.png", "FirstName": "Nancy", "LastName": "Davolio", "Country": "USA", "Title": "Sales Representative", "HireDate": "1992-05-01 00:00:00", "BirthDate": "1968-12-08 00:00:00", "City": "Seattle", "Address": "507 - 20th Ave. E.Apt. 2A" }, { "EmployeeID": 3, "icon": "https://www.jqwidgets.com/react/images/woman.png", "FirstName": "Janet", "LastName": "Leverling", "Country": "USA", "Title": "Sales Representative", "HireDate": "1992-04-01 00:00:00", "BirthDate": "1963-08-30 00:00:00", "City": "Kirkland", "Address": "722 Moss Bay Blvd." }, { "EmployeeID": 4, "icon": "https://www.jqwidgets.com/react/images/woman.png", "FirstName": "Margaret", "LastName": "Peacock", "Country": "USA", "Title": "Sales Representative", "HireDate": "1993-05-03 00:00:00", "BirthDate": "1967-09-19 00:00:00", "City": "Redmond", "Address": "4110 Old Redmond Rd." }, { "EmployeeID": 5, "icon": "https://www.jqwidgets.com/react/images/boss.png", "FirstName": "Steven", "LastName": "Buchanan", "Country": "UK", "Title": "Sales Manager", "HireDate": "1993-10-17 00:00:00", "BirthDate": "1955-03-04 00:00:00", "City": "London", "Address": "14 Garrett Hill", "expanded": "true", "children": [{ "EmployeeID": 6, "icon": "https://www.jqwidgets.com/react/images/asian.png", "FirstName": "Michael", "LastName": "Suyama", "Country": "UK", "Title": "Sales Representative", "HireDate": "1993-10-17 00:00:00", "BirthDate": "1963-07-02 00:00:00", "City": "London", "Address": "Coventry House Miner Rd." }, { "EmployeeID": 7, "icon": "https://www.jqwidgets.com/react/images/person.png", "FirstName": "Robert", "LastName": "King", "Country": "UK", "Title": "Sales Representative", "HireDate": "1994-01-02 00:00:00", "BirthDate": "1960-05-29 00:00:00", "City": "London", "Address": "Edgeham Hollow Winchester Way" }, { "EmployeeID": 9, "icon": "https://www.jqwidgets.com/react/images/woman.png", "FirstName": "Anne", "LastName": "Dodsworth", "Country": "UK", "Title": "Sales Representative", "HireDate": "1994-11-15 00:00:00", "BirthDate": "1966-01-27 00:00:00", "City": "London", "Address": "7 Houndstooth Rd." }] }, { "EmployeeID": 10, "icon": "https://www.jqwidgets.com/react/images/asian.png", "FirstName": "Fumi", "LastName": "Jinushi", "Country": "UK", "Title": "Sales Manager", "HireDate": "1994-11-15 00:00:00", "BirthDate": "1954-02-03 00:00:00", "City": "London", "Address": "14 Garrett Hill", "children": [{ "EmployeeID": 11, "icon": "https://www.jqwidgets.com/react/images/person.png", "FirstName": "Michael", "LastName": "Davidson", "Country": "UK", "Title": "Sales Representative", "HireDate": "1996-10-17 00:00:00", "BirthDate": "1973-07-02 00:00:00", "City": "London", "Address": "Coventry House Miner Rd." }, { "EmployeeID": 12, "icon": "https://www.jqwidgets.com/react/images/person.png", "FirstName": "Peter", "LastName": "Smith", "Country": "UK", "Title": "Sales Representative", "HireDate": "1998-01-02 00:00:00", "BirthDate": "1970-05-29 00:00:00", "City": "London", "Address": "Edgeham Hollow Winchester Way" }] }, { "EmployeeID": 13, "icon": "https://www.jqwidgets.com/react/images/person.png", "FirstName": "Chris", "LastName": "Ferguson", "Country": "USA", "Title": "Sales Representative", "HireDate": "2009-05-03 00:00:00", "BirthDate": "1967-09-19 00:00:00", "City": "Redmond", "Address": "4115 Old Redmond Rd." }, { "EmployeeID": 14, "icon": "https://www.jqwidgets.com/react/images/person.png", "FirstName": "Antoni", "LastName": "Brooke", "Country": "USA", "Title": "Sales Representative", "HireDate": "2010-05-03 00:00:00", "BirthDate": "1985-09-19 00:00:00", "City": "Redmond", "Address": "4210 Old Redmond Rd." }], "expanded": "true", "icon": "https://www.jqwidgets.com/react/images/oldboss.png" }];

        this.treeGridOnCellBeginEdit = this.treeGridOnCellBeginEdit.bind(this);
        this.treeGridOnCellEndEdit = this.treeGridOnCellEndEdit.bind(this);

        const source: any = {
            dataFields: [
                { name: 'EmployeeID', type: 'number' },
                { name: 'FirstName', type: 'string' },
                { name: 'LastName', type: 'string' },
                { name: 'Country', type: 'string' },
                { name: 'City', type: 'string' },
                { name: 'Address', type: 'string' },
                { name: 'Title', type: 'string' },
                { name: 'icon', type: 'string' },
                { name: 'HireDate', type: 'date' },
                { name: 'children', type: 'array' },
                { name: 'expanded', type: 'bool' },
                { name: 'BirthDate', type: 'date' }
            ],
            dataType: 'json',
            hierarchy:
            {
                root: 'children'
            },
            id: 'EmployeeID',
            localData: employees
        };

        const dataAdapter: any = new jqx.dataAdapter(source);

        this.state = {
            columns: [
                { dataField: 'FirstName', text: 'FirstName', width: 200 },
                { dataField: 'LastName', text: 'LastName', width: 200 },
                { dataField: 'City', text: 'City', width: 200 },
                { dataField: 'Country', text: 'Country' }
            ],
            editSettings: {
                cancelOnEsc: true,
                editOnDoubleClick: true,
                editOnF2: true,
                editSingleCell: true,
                saveOnBlur: true,
                saveOnPageChange: true,
                saveOnSelectionChange: true
            },
            source: dataAdapter
        }
    }

    public render() {
        return (
            <div>
                <JqxTreeGrid theme={'material-purple'} ref={this.myTreeGrid}
                    onCellBeginEdit={this.treeGridOnCellBeginEdit}
                    onCellEndEdit={this.treeGridOnCellEndEdit}
                    // @ts-ignore
                    width={'100%'}
                    source={this.state.source}
                    editable={true}
                    sortable={true}
                    columns={this.state.columns}
                    editSettings={this.state.editSettings}
                />

                <div style={{ fontSize: '13px', fontFamily: 'Verdana', width: '800px', marginTop: '20px' }}>
                    <h4>Event Log</h4>
                    <div ref={this.myLog} id="myLog" style={{ maxHeight: '300px', overflow: 'auto' }} />
                </div>
            </div>
        );
    }

    // Event handling
    private treeGridOnCellBeginEdit(event: any): void {
        const args = event.args;
        // row key
        const rowKey = args.key;
        // row's data.
        // const rowData = args.row;
        // column's data field.
        const columnDataField = args.dataField;
        // column's display field.
        // const columnDisplayField = args.displayField;
        // cell's value.
        const value = args.value;
        this.myLog.current!.innerHTML = 'cellBeginEdit - Row ID: ' + rowKey + ', Column: ' + columnDataField + ', Value: ' + value + '<br/>' + this.myLog.current!.innerHTML;
    }

    private treeGridOnCellEndEdit(event: any): void {
        const args = event.args;
        // row key
        const rowKey = args.key;
        // row's data.
        // const rowData = args.row;
        // column's data field.
        const columnDataField = args.dataField;
        // column's display field.
        // const columnDisplayField = args.displayField;
        // cell's value.
        const value = args.value;
        this.myLog.current!.innerHTML = '<br/>cellEndEdit - Row ID: ' + rowKey + ', Column: ' + columnDataField + ', Value: ' + value + '<br/>' + this.myLog.current!.innerHTML;
    }
}

export default App;
