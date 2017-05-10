import React from 'react';
import ReactDOM from 'react-dom';

import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';
import JqxInput from '../../../jqwidgets-react/react_jqxinput.js';
import JqxDateTimeInput from '../../../jqwidgets-react/react_jqxdatetimeinput.js';
import JqxNumberInput from '../../../jqwidgets-react/react_jqxnumberinput.js';
import JqxWindow from '../../../jqwidgets-react/react_jqxwindow.js';

class App extends React.Component {
    componentDidMount() {
        let windowElement = document.getElementById(this.refs.myWindow.componentSelector);

        this.refs.myDataTable.on('rowDoubleClick', (event) => {
            let args = event.args;
            let index = args.index;
            let row = args.row;
            // update the widgets inside jqxWindow.
            this.refs.myWindow.setTitle('Edit Row: ' + row.OrderID);
            this.refs.myWindow.open();
            windowElement.setAttribute('data-row', index);
            this.refs.myDataTable.disabled(true);
            this.refs.orderID.val(row.OrderID);
            this.refs.freight.val(row.Freight);
            this.refs.shipCountry.val(row.ShipCountry);
            this.refs.shipDate.value(row.ShippedDate);
        });

        this.refs.cancelButton.on('click', () => {
            // close jqxWindow.
            this.refs.myWindow.close();
        });

        this.refs.saveButton.on('click', () => {
            // close jqxWindow.
            this.refs.myWindow.close();
            // update edited row.
            let editRow = parseInt(windowElement.getAttribute('data-row'));
            let rowData = {
                OrderID: this.refs.orderID.val(),
                Freight: this.refs.freight.val(),
                ShipCountry: this.refs.shipCountry.val(),
                ShippedDate: this.refs.shipDate.value()
            };
            this.refs.myDataTable.updateRow(editRow, rowData);
        });

        this.refs.myWindow.on('close', () => {
            // enable jqxDataTable.
            this.refs.myDataTable.disabled(false);
        });

        document.getElementsByClassName('window')[0].style.visibility = 'visible';
    }
    render() {
        let source =
            {
                dataFields: [
                    { name: 'OrderID', type: 'int' },
                    { name: 'Freight', type: 'float' },
                    { name: 'ShipName', type: 'string' },
                    { name: 'ShipAddress', type: 'string' },
                    { name: 'ShipCity', type: 'string' },
                    { name: 'ShipCountry', type: 'string' },
                    { name: 'ShippedDate', type: 'date' }
                ],
                root: 'Orders',
                record: 'Order',
                dataType: 'xml',
                id: 'OrderID',
                url: '../sampledata/orderdetails.xml',
                addRow: (rowID, rowData, position, commit) => {
                    // synchronize with the server - send insert command
                    // call commit with parameter true if the synchronization with the server is successful 
                    // and with parameter false if the synchronization failed.
                    // you can pass additional argument to the commit callback which represents the new ID if it is generated from a DB.
                    commit(true);
                },
                updateRow: (rowID, rowData, commit) => {
                    // synchronize with the server - send update command
                    // call commit with parameter true if the synchronization with the server is successful 
                    // and with parameter false if the synchronization failed.
                    commit(true);
                },
                deleteRow: (rowID, commit) => {
                    // synchronize with the server - send delete command
                    // call commit with parameter true if the synchronization with the server is successful 
                    // and with parameter false if the synchronization failed.
                    commit(true);
                }
            };

        let dataAdapter = new $.jqx.dataAdapter(source, {
            loadComplete: () => {
                // data is loaded.
            }
        });

        let columns =
            [
                { text: 'Order ID', editable: false, dataField: 'OrderID', width: 200 },
                { text: 'Freight', dataField: 'Freight', cellsFormat: 'f2', cellsAlign: 'right', align: 'right', width: 200 },
                { text: 'Ship Country', dataField: 'ShipCountry', width: 150 },
                { text: 'Shipped Date', dataField: 'ShippedDate', cellsAlign: 'right', align: 'right', cellsFormat: 'd' }
            ];

        let countries = new Array('Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo, Democratic Republic', 'Congo, Republic of the', 'Costa Rica', 'Cote d`Ivoire', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Greenland', 'Grenada', 'Guatemala', 'Guinea', 'Guinea- Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Mongolia', 'Morocco', 'Monaco', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Samoa', 'San Marino', ' Sao Tome', 'Saudi Arabia', 'Senegal', 'Serbia and Montenegro', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe');

        return (
            <div>
                <JqxDataTable ref='myDataTable' className='dataTable'
                    width={850} source={dataAdapter} altRows={true}
                    pageable={true} sortable={true} columns={columns}
                    pagerButtonsCount={8}
                />
                <JqxWindow ref='myWindow' className='window' style={{ visibility: 'hidden' }}
                    width={270} height={230} resizable={false} autoOpen={false}
                    position={{ left: 85, top: 76 }}
                >
                    <div>Edit Dialog</div>
                    <div style={{ overflow: 'hidden' }}>
                        <table style={{ tableLayout: 'fixed', borderStyle: 'none' }}>
                            <tbody>
                                <tr>
                                    <td align='right'>
                                        Order ID:
                                </td>
                                    <td align='left'>
                                        <JqxInput ref='orderID'
                                            width={150} height={30} disabled={true}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td align='right'>
                                        Freight:
                                </td>
                                    <td align='left'>
                                        <JqxNumberInput ref='freight'
                                            width={150} height={30}
                                            spinButtons={true} inputMode={'simple'}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td align='right'>
                                        Ship Country:
                                </td>
                                    <td align='left'>
                                        <JqxInput ref='shipCountry'
                                            width={150} height={30} source={countries}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td align='right'>
                                        Shipped Date:
                                </td>
                                    <td align='left'>
                                        <JqxDateTimeInput ref='shipDate'
                                            width={150} height={30} formatString={'d'}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan='2' align='right'>
                                        <br />
                                        <JqxButton ref='cancelButton' style={{ marginLeft: 5, float: 'right' }}
                                            value='Cancel' width={80} height={30}
                                        />
                                        <JqxButton ref='saveButton' style={{ float: 'right' }}
                                            value='Save' width={80} height={30}
                                        />
                               
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </JqxWindow>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
