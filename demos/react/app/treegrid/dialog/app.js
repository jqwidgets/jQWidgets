import React from 'react';
import ReactDOM from 'react-dom';

import JqxTreeGrid from '../../../jqwidgets-react/react_jqxtreegrid.js';
import JqxWindow from '../../../jqwidgets-react/react_jqxwindow.js';
import JqxInput from '../../../jqwidgets-react/react_jqxinput.js';
import JqxDateTimeInput from '../../../jqwidgets-react/react_jqxdatetimeinput.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myTreeGrid.expandRow(2);
        this.refs.myTreeGrid.expandRow(5);

        let dataRow = null;

        this.refs.myTreeGrid.on('rowDoubleClick', (event) => {
            let args = event.args;
            let key = args.key;
            let row = args.row;
            // update the widgets inside jqxWindow.
            this.refs.jqxWindow.setTitle('Edit Row: ' + row.EmployeeID);
            this.refs.jqxWindow.open();
            dataRow = key;
            this.refs.EmployeeID.val(row.EmployeeID);
            this.refs.Title.val(row.Title);
            this.refs.Country.val(row.Country);
            this.refs.BirthDate.val(row.BirthDate);
            // disable TreeGrid.
            this.refs.myTreeGrid.disabled(true);
        });

        this.refs.cancel.on('mousedown', (event) => {
            this.refs.jqxWindow.close();            
        });

        this.refs.save.on('mousedown', (event) => {
            this.refs.jqxWindow.close();  
            let editRow = parseInt(dataRow);
            var rowData = {
                EmployeeID: this.refs.EmployeeID.val(), 
                Title: this.refs.Title.val(),
                Country: this.refs.Country.val(), 
                BirthDate: this.refs.BirthDate.val()
            };
            this.refs.myTreeGrid.updateRow(editRow, rowData);
        });

        this.refs.jqxWindow.on('close', (event) => {
            this.refs.myTreeGrid.disabled(false);
        });
    }
    render () {
        let employees = [{ 'EmployeeID': 1, 'FirstName': 'Nancy', 'LastName': 'Davolio', 'ReportsTo': 2, 'Country': 'USA', 'Title': 'Sales Representative', 'HireDate': '1992-05-01 00:00:00', 'BirthDate': '1948-12-08 00:00:00', 'City': 'Seattle', 'Address': '507 - 20th Ave. E.Apt. 2A' }, { 'EmployeeID': 2, 'FirstName': 'Andrew', 'LastName': 'Fuller', 'ReportsTo': null, 'Country': 'USA', 'Title': 'Vice President, Sales', 'HireDate': '1992-08-14 00:00:00', 'BirthDate': '1952-02-19 00:00:00', 'City': 'Tacoma', 'Address': '908 W. Capital Way' }, { 'EmployeeID': 3, 'FirstName': 'Janet', 'LastName': 'Leverling', 'ReportsTo': 2, 'Country': 'USA', 'Title': 'Sales Representative', 'HireDate': '1992-04-01 00:00:00', 'BirthDate': '1963-08-30 00:00:00', 'City': 'Kirkland', 'Address': '722 Moss Bay Blvd.' }, { 'EmployeeID': 4, 'FirstName': 'Margaret', 'LastName': 'Peacock', 'ReportsTo': 2, 'Country': 'USA', 'Title': 'Sales Representative', 'HireDate': '1993-05-03 00:00:00', 'BirthDate': '1937-09-19 00:00:00', 'City': 'Redmond', 'Address': '4110 Old Redmond Rd.' }, { 'EmployeeID': 5, 'FirstName': 'Steven', 'LastName': 'Buchanan', 'ReportsTo': 2, 'Country': 'UK', 'Title': 'Sales Manager', 'HireDate': '1993-10-17 00:00:00', 'BirthDate': '1955-03-04 00:00:00', 'City': 'London', 'Address': '14 Garrett Hill' }, { 'EmployeeID': 6, 'FirstName': 'Michael', 'LastName': 'Suyama', 'ReportsTo': 5, 'Country': 'UK', 'Title': 'Sales Representative', 'HireDate': '1993-10-17 00:00:00', 'BirthDate': '1963-07-02 00:00:00', 'City': 'London', 'Address': 'Coventry House Miner Rd.' }, { 'EmployeeID': 7, 'FirstName': 'Robert', 'LastName': 'King', 'ReportsTo': 5, 'Country': 'UK', 'Title': 'Sales Representative', 'HireDate': '1994-01-02 00:00:00', 'BirthDate': '1960-05-29 00:00:00', 'City': 'London', 'Address': 'Edgeham Hollow Winchester Way' }, { 'EmployeeID': 8, 'FirstName': 'Laura', 'LastName': 'Callahan', 'ReportsTo': 2, 'Country': 'USA', 'Title': 'Inside Sales Coordinator', 'HireDate': '1994-03-05 00:00:00', 'BirthDate': '1958-01-09 00:00:00', 'City': 'Seattle', 'Address': '4726 - 11th Ave. N.E.' }, { 'EmployeeID': 9, 'FirstName': 'Anne', 'LastName': 'Dodsworth', 'ReportsTo': 5, 'Country': 'UK', 'Title': 'Sales Representative', 'HireDate': '1994-11-15 00:00:00', 'BirthDate': '1966-01-27 00:00:00', 'City': 'London', 'Address': '7 Houndstooth Rd.' }];
        // prepare the data
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
            hierarchy:
            {
                keyDataField: { name: 'EmployeeID' },
                parentDataField: { name: 'ReportsTo' }
            },
            id: 'EmployeeID',
            localData: employees
        };
        let dataAdapter = new $.jqx.dataAdapter(source);
        // create Tree Grid
        let columns = [
            { text: 'Employee ID', editable: false, dataField: 'EmployeeID', width: 150 },
            { text: 'Title', dataField: 'Title', width: 250 },
            { text: 'Country', dataField: 'Country', width: 150 },
            { text: 'Bith Date', dataField: 'BirthDate', cellsAlign: 'right', align: 'right', cellsFormat: 'd' }
        ];

        let countries = new Array('Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo, Democratic Republic', 'Congo, Republic of the', 'Costa Rica', 'Cote d\'Ivoire', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Greenland', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Mongolia', 'Morocco', 'Monaco', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Samoa', 'San Marino', ' Sao Tome', 'Saudi Arabia', 'Senegal', 'Serbia and Montenegro', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe');
                    
        return (
            <div>

                <JqxTreeGrid ref='myTreeGrid'
                    width={850}
                    source={dataAdapter}
                    sortable={true}
                    altRows={true}
                    columns={columns}
                />

                <JqxWindow ref='jqxWindow' className='dialog'
                    width={270} resizable={false} position={{ x: 60, y: 75 }}
                    autoOpen={false}
                >

                    <div>Edit Dialog</div>
                    <div style={{ overflow: 'hidden' }} >
                        <table style={{ tableLayout: 'fixed', borderStyle: 'none' }} >
                            <tr>
                                <td style={{ textAlign: 'right' }}>Employee ID:
                                </td>
                                <td style={{ textAlign: 'left' }}>
                                    <JqxInput ref='EmployeeID'
                                        disabled={true} width={150} height={30}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: 'right' }}>Title:
                                </td>
                                <td style={{ textAlign: 'left' }}>
                                        <JqxInput ref='Title' width={150} height={30} />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: 'right' }}>Country:
                                </td>
                                <td style={{ textAlign: 'left' }}>
                                    <JqxInput ref='Country' source={countries} width={150} height={30} />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: 'right' }}>Birth Date:</td>
                                <td style={{ textAlign: 'left' }}>
                                    <JqxDateTimeInput ref='BirthDate' width={150} height={30} />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan='2' style={{ textAlign: 'right', paddingTop: 5, paddingLeft: 80 }} >
                                    <JqxButton ref='save' width={80} height={30} value='Save' style={{ float: 'left' }} />
                                    <JqxButton ref='cancel' width={80} height={30} value='Cancel' style={{ float: 'left', marginLeft: 5 }} />
                                </td>
                            </tr>
                        </table>
                    </div>
                </JqxWindow>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
