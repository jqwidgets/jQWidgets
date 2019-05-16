import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxDateTimeInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatetimeinput';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';
import JqxWindow from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxwindow';

class App extends React.PureComponent<{}, ITreeGridProps> {
    private myTreeGrid = React.createRef<JqxTreeGrid>();
    private EmployeeID = React.createRef<JqxInput>();
    private Country = React.createRef<JqxInput>();
    private Title = React.createRef<JqxInput>();
    private BirthDate = React.createRef<JqxDateTimeInput>();
    private myWindow = React.createRef<JqxWindow>();

    private dataRow: any = null;

    constructor(props: {}) {
        super(props);

        this.RowDoubleClick = this.RowDoubleClick.bind(this);
        this.windowClose = this.windowClose.bind(this);
        this.clickSave = this.clickSave.bind(this);
        this.clickCancel = this.clickCancel.bind(this);

        const employees: any[] = [{ 'EmployeeID': 1, 'FirstName': 'Nancy', 'LastName': 'Davolio', 'ReportsTo': 2, 'Country': 'USA', 'Title': 'Sales Representative', 'HireDate': '1992-05-01 00:00:00', 'BirthDate': '1948-12-08 00:00:00', 'City': 'Seattle', 'Address': '507 - 20th Ave. E.Apt. 2A' }, { 'EmployeeID': 2, 'FirstName': 'Andrew', 'LastName': 'Fuller', 'ReportsTo': null, 'Country': 'USA', 'Title': 'Vice President, Sales', 'HireDate': '1992-08-14 00:00:00', 'BirthDate': '1952-02-19 00:00:00', 'City': 'Tacoma', 'Address': '908 W. Capital Way' }, { 'EmployeeID': 3, 'FirstName': 'Janet', 'LastName': 'Leverling', 'ReportsTo': 2, 'Country': 'USA', 'Title': 'Sales Representative', 'HireDate': '1992-04-01 00:00:00', 'BirthDate': '1963-08-30 00:00:00', 'City': 'Kirkland', 'Address': '722 Moss Bay Blvd.' }, { 'EmployeeID': 4, 'FirstName': 'Margaret', 'LastName': 'Peacock', 'ReportsTo': 2, 'Country': 'USA', 'Title': 'Sales Representative', 'HireDate': '1993-05-03 00:00:00', 'BirthDate': '1937-09-19 00:00:00', 'City': 'Redmond', 'Address': '4110 Old Redmond Rd.' }, { 'EmployeeID': 5, 'FirstName': 'Steven', 'LastName': 'Buchanan', 'ReportsTo': 2, 'Country': 'UK', 'Title': 'Sales Manager', 'HireDate': '1993-10-17 00:00:00', 'BirthDate': '1955-03-04 00:00:00', 'City': 'London', 'Address': '14 Garrett Hill' }, { 'EmployeeID': 6, 'FirstName': 'Michael', 'LastName': 'Suyama', 'ReportsTo': 5, 'Country': 'UK', 'Title': 'Sales Representative', 'HireDate': '1993-10-17 00:00:00', 'BirthDate': '1963-07-02 00:00:00', 'City': 'London', 'Address': 'Coventry House Miner Rd.' }, { 'EmployeeID': 7, 'FirstName': 'Robert', 'LastName': 'King', 'ReportsTo': 5, 'Country': 'UK', 'Title': 'Sales Representative', 'HireDate': '1994-01-02 00:00:00', 'BirthDate': '1960-05-29 00:00:00', 'City': 'London', 'Address': 'Edgeham Hollow Winchester Way' }, { 'EmployeeID': 8, 'FirstName': 'Laura', 'LastName': 'Callahan', 'ReportsTo': 2, 'Country': 'USA', 'Title': 'Inside Sales Coordinator', 'HireDate': '1994-03-05 00:00:00', 'BirthDate': '1958-01-09 00:00:00', 'City': 'Seattle', 'Address': '4726 - 11th Ave. N.E.' }, { 'EmployeeID': 9, 'FirstName': 'Anne', 'LastName': 'Dodsworth', 'ReportsTo': 5, 'Country': 'UK', 'Title': 'Sales Representative', 'HireDate': '1994-11-15 00:00:00', 'BirthDate': '1966-01-27 00:00:00', 'City': 'London', 'Address': '7 Houndstooth Rd.' }];
        // prepare the data
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
                { text: 'Employee ID', editable: false, dataField: 'EmployeeID', width: 150 },
                { text: 'Title', dataField: 'Title', width: 250 },
                { text: 'Country', dataField: 'Country', width: 150 },
                { text: 'Bith Date', dataField: 'BirthDate', cellsAlign: 'right', align: 'right', cellsFormat: 'd' }
            ],
            disabled: false,
            ready: () => {
                setTimeout(() => {
                    this.myTreeGrid.current!.expandRow(2);
                    this.myTreeGrid.current!.expandRow(5);
                });
            },
            source: dataAdapter
        }
    }

    public render() {
        const textAlignLeft: React.CSSProperties = { textAlign: 'left' };
        const textAlignRigth: React.CSSProperties = { textAlign: 'right' };
        return (
            <div>
                <JqxTreeGrid theme={'material-purple'} ref={this.myTreeGrid}
                    onRowDoubleClick={this.RowDoubleClick}
                    // @ts-ignore
                    width={'100%'}
                    source={this.state.source}
                    sortable={true}
                    altRows={true}
                    columns={this.state.columns}
                    ready={this.state.ready}
                    disabled={this.state.disabled}
                />

                <JqxWindow theme={'material-purple'} ref={this.myWindow}
                    onClose={this.windowClose}
                    width={270}
                    height={225}
                    resizable={false}
                    position={{ x: 60, y: 45 }}
                    autoOpen={false}>

                    <div>Edit Dialog</div>
                    <div style={{ overflow: 'hidden' }}>
                        <table style={{ tableLayout: 'fixed', borderStyle: 'none' }}>
                            <tbody>
                                <tr>
                                    <td style={textAlignRigth}>
                                        Employee ID:
                                </td>
                                    <td style={textAlignLeft}>
                                        <JqxInput theme={'material-purple'} ref={this.EmployeeID} disabled={true} width={150} height={30} />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={textAlignRigth}>
                                        Title:
                                    </td>
                                    <td style={textAlignLeft}>
                                        <JqxInput theme={'material-purple'} ref={this.Title} width={150} height={30} />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={textAlignRigth}>
                                        Country:
                                    </td>
                                    <td style={textAlignLeft}>
                                        <JqxInput theme={'material-purple'} ref={this.Country} width={150} height={30} />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={textAlignRigth}>Birth Date:</td>
                                    <td style={textAlignLeft}>
                                        <JqxDateTimeInput theme={'material-purple'} ref={this.BirthDate} width={150} height={30} />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2} style={{ textAlign: 'right', paddingTop: '10px', paddingLeft: '80px' }}>
                                        <JqxButton theme={'material-purple'} style={{ float: 'left', padding: 0, lineHeight: '25px' }} onClick={this.clickSave} width={80} height={25}>Save</JqxButton>
                                        <JqxButton theme={'material-purple'} style={{ float: 'left', padding: 0, marginLeft: 10, lineHeight: '25px' }} onClick={this.clickCancel} width={80} height={25}>Cancel</JqxButton>
                                    </td>
                                </tr>
                            </tbody>
                        </table >

                    </div>
                </JqxWindow>

            </div>
        );
    }

    // Event handling
    private RowDoubleClick(event: any): void {
        const args = event.args;
        const key = args.key;
        const row = args.row;
        // update the widgets inside jqxWindow.
        this.myWindow.current!.setTitle('Edit Row: ' + row.EmployeeID);
        this.myWindow.current!.open();
        this.dataRow = key;
        this.EmployeeID.current!.val(row.EmployeeID);
        this.Title.current!.val(row.Title);
        this.Country.current!.val(row.Country);
        this.BirthDate.current!.val(row.BirthDate);
        // disable TreeGrid.
        this.setState({ disabled: true });
    }

    private windowClose(): void {
        this.setState({ disabled: false });
    }

    private getValue = (widget: any) => {
        return widget.current!.getOptions('value');
    };

    private clickSave(): void {
        this.myWindow.current!.close();
        const editRow = parseInt(this.dataRow, 10);
        const rowData = {
            BirthDate: this.getValue(this.BirthDate),
            Country: this.getValue(this.Country),
            EmployeeID: this.getValue(this.EmployeeID),
            Title: this.getValue(this.Title)
        };

        this.myTreeGrid.current!.updateRow(editRow, rowData);
    }

    private clickCancel(): void {
        this.myWindow.current!.close();
    }
}

export default App;
