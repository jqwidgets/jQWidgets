import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';
import JqxInput from '../../../jqwidgets-react/react_jqxinput.js';
import JqxNumberInput from '../../../jqwidgets-react/react_jqxnumberinput.js';
import JqxWindow from '../../../jqwidgets-react/react_jqxwindow.js';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            editrow: -1
        }
    }
    componentDidMount() {
        this.refs.myWindow.on('open', () => {
            this.refs.firstName.selectAll();
        });
        this.refs.SaveBtn.on('click', () => {
            if (this.state.editrow >= 0) {
                let row = {
                    firstname: this.refs.firstName.val(), lastname: this.refs.lastName.val(), productname: this.refs.productName.val(),
                    quantity: parseInt(this.refs.quantity.decimal()), price: parseFloat(this.refs.price.decimal())
                };
                let rowID = this.refs.myGrid.getrowid(this.state.editrow);
                this.refs.myGrid.updaterow(rowID, row);
                this.refs.myWindow.hide();
            }
        });
        this.refs.CancelBtn.on('click', () => {
            this.refs.myWindow.hide();
        });
    }
    render() {
        let source =
            {
                localdata: generatedata(200),
                datatype: 'array',
                datafields:
                [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' }
                ],
                updaterow: (rowid, rowdata, commit) => {
                    // synchronize with the server - send update command
                    // call commit with parameter true if the synchronization with the server is successful 
                    // and with parameter false if the synchronization failder.
                    commit(true);
                }
            };

        let dataAdapter = new $.jqx.dataAdapter(source);


        let columns =
            [
                { text: 'First Name', datafield: 'firstname', width: 200 },
                { text: 'Last Name', datafield: 'lastname', width: 200 },
                { text: 'Product', datafield: 'productname', width: 190 },
                { text: 'Quantity', datafield: 'quantity', width: 90, cellsalign: 'right' },
                { text: 'Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                {
                    text: 'Edit', datafield: 'Edit', columntype: 'button',
                    cellsrenderer: () => {
                        return 'Edit';
                    }, buttonclick: (row) => {
                        // open the popup window when the user clicks a button.
                        this.setState({
                            editrow: row
                        });
                        this.refs.myWindow.position({ x: 68, y: this.refs.myGrid.offsetTop });
                        // get the clicked row's data and initialize the input fields.
                        let dataRecord = this.refs.myGrid.getrowdata(this.state.editrow);
                        this.refs.firstName.val(dataRecord.firstname);
                        this.refs.lastName.val(dataRecord.lastname);
                        this.refs.productName.val(dataRecord.productname);
                        this.refs.quantity.decimal(dataRecord.quantity);
                        this.refs.price.decimal(dataRecord.price);
                        // show the popup window.
                        this.refs.myWindow.open();
                    }
                }
            ];

        return (
            <div>
                <JqxGrid ref='myGrid' className='myGrid'
                    width={850} source={dataAdapter} pageable={true}
                    autoheight={true} columns={columns}
                />
                <JqxWindow ref='myWindow'
                    width={250} resizable={false} isModal={true} autoOpen={false} modalOpacity={'0.01'}>
                    <div>Edit</div>
                    <div style={{ overflow: 'hidden' }}>
                        <table>
                            <tbody>
                                <tr>
                                    <td align='right'>First Name:</td>
                                    <td align='left'>
                                        <JqxInput ref='firstName' width={150} height={23} />
                                    </td>
                                </tr>
                                <tr>
                                    <td align='right'>Last Name:</td>
                                    <td align='left'>
                                        <JqxInput ref='lastName' width={150} height={23} />
                                    </td>
                                </tr>
                                <tr>
                                    <td align='right'>Product:</td>
                                    <td align='left'>
                                        <JqxInput ref='productName' width={150} height={23} />
                                    </td>
                                </tr>
                                <tr>
                                    <td align='right'>Quantity:</td>
                                    <td align='left'>
                                        <JqxNumberInput ref='quantity'
                                            width={150} height={23} spinButtons={true}
                                            min={0} decimalDigits={0} spinMode={'simple'}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td align='right'>Price:</td>
                                    <td align='left'>
                                        <JqxNumberInput ref='price'
                                            width={150} height={23} spinButtons={true}
                                            min={0} spinMode={'simple'} symbol={'$'}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td align='right'></td>
                                    <td style={{ paddingTop: 10, float: 'right' }} align='right'>
                                        <JqxButton style={{ marginRight: 5, float: 'left' }} ref='SaveBtn' value='Save' />
                                        <JqxButton style={{ float: 'left' }} ref='CancelBtn' value='Cancel' />
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
