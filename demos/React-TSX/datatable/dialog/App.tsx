import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';
import JqxDateTimeInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatetimeinput';
import JqxInput, { IInputProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxNumberInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnumberinput';
import JqxWindow from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxwindow';

export interface IState extends IDataTableProps {
    countries: IInputProps['source'];
}

class App extends React.PureComponent<{}, IState> {

    private myDataTable = React.createRef<JqxDataTable>();
    private myWindow = React.createRef<JqxWindow>();
    private orderID = React.createRef<JqxInput>();
    private freight = React.createRef<JqxNumberInput>();
    private shipCountry = React.createRef<JqxInput>();
    private shipDate = React.createRef<JqxDateTimeInput>();
    private tempIndexHolder: string;

    constructor(props: {}) {
        super(props);
        this.onRowDoubleClick = this.onRowDoubleClick.bind(this);
        this.cancelBtnOnClick = this.cancelBtnOnClick.bind(this);
        this.saveBtnOnClick = this.saveBtnOnClick.bind(this);
        this.myWindowOnClose = this.myWindowOnClose.bind(this);

        const source: any = {
            dataFields: [
                { name: 'OrderID', type: 'int' },
                { name: 'Freight', type: 'float' },
                { name: 'ShipName', type: 'string' },
                { name: 'ShipAddress', type: 'string' },
                { name: 'ShipCity', type: 'string' },
                { name: 'ShipCountry', type: 'string' },
                { name: 'ShippedDate', type: 'date' }
            ],
            dataType: 'xml',
            id: 'OrderID',
            record: 'Order',
            root: 'Orders',
            url: 'orderdetails.xml'
        };

        const countries: IInputProps['source'] = new Array('Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo, Democratic Republic', 'Congo, Republic of the', 'Costa Rica', 'Cote d`Ivoire', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Greenland', 'Grenada', 'Guatemala', 'Guinea', 'Guinea- Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Mongolia', 'Morocco', 'Monaco', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Samoa', 'San Marino', ' Sao Tome', 'Saudi Arabia', 'Senegal', 'Serbia and Montenegro', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe');

        this.state = {
            columns: [
                { text: 'Order ID', editable: false, dataField: 'OrderID', width: 200 },
                { text: 'Freight', dataField: 'Freight', cellsFormat: 'f2', cellsAlign: 'right', align: 'right', width: 200 },
                { text: 'Ship Country', dataField: 'ShipCountry', width: 150 },
                { text: 'Shipped Date', dataField: 'ShippedDate', cellsAlign: 'right', align: 'right', cellsFormat: 'd' }
            ],
            countries,
            disabled: false,
            source: new jqx.dataAdapter(source)
        };
    }

    public render() {
        return (
            <div>
                <JqxDataTable theme={'material-purple'} ref={this.myDataTable} onRowDoubleClick={this.onRowDoubleClick}
                    // @ts-ignore 
                    width={'100%'} source={this.state.source}
                    columns={this.state.columns} altRows={true} sortable={true}
                    pageable={true} pagerButtonsCount={8} disabled={this.state.disabled} />

                <JqxWindow theme={'material-purple'} ref={this.myWindow} onClose={this.myWindowOnClose}
                    width={270} height={235} resizable={false}
                    autoOpen={false} position={{ left: 85, top: 43 }}>
                    <div>Edit Dialog</div>
                    <div style={{ overflow: 'hidden' }}>
                        <table style={{ tableLayout: 'fixed', borderStyle: 'none' }}>
                            <tbody>
                                <tr>
                                    <td align='right'>
                                        Order ID:
                                    </td>
                                    <td align='left'>
                                        <JqxInput theme={'material-purple'} ref={this.orderID} width={150} height={30} disabled={true} />
                                    </td>
                                </tr>
                                <tr>
                                    <td align='right'>
                                        Freight:
                                    </td>
                                    <td align='left'>
                                        <JqxNumberInput theme={'material-purple'} ref={this.freight}
                                            width={156} height={30} spinButtons={true} inputMode={'simple'} />
                                    </td>
                                </tr>
                                <tr>
                                    <td align='right'>
                                        Ship Country:
                                    </td>
                                    <td align='left'>
                                        <JqxInput theme={'material-purple'} ref={this.shipCountry} width={150} height={30} source={this.state.countries} />
                                    </td>
                                </tr>
                                <tr>
                                    <td align='right'>
                                        Shipped Date:
                                    </td>
                                    <td align='left'>
                                        <JqxDateTimeInput theme={'material-purple'} ref={this.shipDate}
                                            width={156} height={30} />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2} align='right'>
                                        <br />
                                        <JqxButton theme={'material-purple'} onClick={this.cancelBtnOnClick} style={{ marginLeft: '5px', float: 'right' }}
                                            width={80} height={20}>
                                            Cancel
                                        </JqxButton>
                                        <JqxButton theme={'material-purple'} onClick={this.saveBtnOnClick} style={{ float: 'right' }}
                                            width={80} height={20}>
                                            Save
                                        </JqxButton>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </JqxWindow>

            </div>
        );
    }

    private onRowDoubleClick(event: any): void {
        const args = event.args;
        const index = args.index;
        const row = args.row;
        // Update the widgets inside Window.
        this.myWindow.current!.setTitle('Edit Row: ' + row.OrderID);
        this.myWindow.current!.open();
        this.tempIndexHolder = index;
        this.setState({
            disabled: true
        }, () => {
            this.orderID.current!.val(row.OrderID);
            this.freight.current!.val(row.Freight);
            this.shipCountry.current!.val(row.ShipCountry);
            this.shipDate.current!.val(row.ShippedDate);
        });     
    };

    private cancelBtnOnClick(): void {
        this.myWindow.current!.close();
    };

    private saveBtnOnClick(): void {
        this.myWindow.current!.close();
        // Update edited row.
        const editRow = parseInt(this.tempIndexHolder, 10);
        const rowData = {
            Freight: this.freight.current!.val(),
            OrderID: this.orderID.current!.getOptions('value'),
            ShipCountry: this.shipCountry.current!.getOptions('value'),
            ShippedDate: this.shipDate.current!.getOptions('value')
        };
        this.myDataTable.current!.updateRow(editRow, rowData);
    };

    private myWindowOnClose(): void {
        this.setState({
            disabled: false
        });
    };
}

export default App;