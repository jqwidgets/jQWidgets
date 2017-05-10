import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';
import JqxMenu from '../../../jqwidgets-react/react_jqxmenu.js';
import JqxInput from '../../../jqwidgets-react/react_jqxinput.js';
import JqxNumberInput from '../../../jqwidgets-react/react_jqxnumberinput.js';
import JqxWindow from '../../../jqwidgets-react/react_jqxwindow.js';

class App extends React.Component {  
    componentDidMount() {

        let editrow = -1;

        this.refs.myGrid.on('contextmenu', () => {
            return false;
        });

        this.refs.myGrid.on('rowclick', (event) => {
            if (event.args.rightclick) {
                this.refs.myGrid.selectrow(event.args.rowindex);
                var scrollTop = $(window).scrollTop();
                var scrollLeft = $(window).scrollLeft();
                this.refs.myMenu.open(parseInt(event.args.originalEvent.clientX) + 5 + scrollLeft, parseInt(event.args.originalEvent.clientY) + 5 + scrollTop);
                return false;
            }
        });

        this.refs.myMenu.on('itemclick', (event) => {
            let args = event.args;
            let rowindex = this.refs.myGrid.getselectedrowindex();
            if ($.trim($(args).text()) == 'Edit Selected Row') {
                editrow = rowindex;
                this.refs.myWindow.position({ x: 60, y: 60 });
                // get the clicked row's data and initialize the input fields.
                let dataRecord = this.refs.myGrid.getrowdata(editrow);
                this.refs.firstName.val(dataRecord.firstname);
                this.refs.lastName.val(dataRecord.lastname);
                this.refs.product.val(dataRecord.productname);
                this.refs.quantity.decimal(dataRecord.quantity);
                this.refs.price.decimal(dataRecord.price);
                // show the popup window.
                this.refs.myWindow.open();
            }
            else {
                let rowid = this.refs.myGrid.getrowid(rowindex);
                this.refs.myGrid.deleterow(rowid);
            }
        });

        this.refs.SaveBtn.on('click', () => {
            if (editrow >= 0) {
                let row = {
                    firstname: this.refs.firstName.val(), lastname: this.refs.lastName.val(), productname: this.refs.product.val(),
                    quantity: parseInt(this.refs.quantity.decimal()), price: parseFloat(this.refs.price.decimal())
                };
                let rowid = this.refs.myGrid.getrowid(editrow);
                this.refs.myGrid.updaterow(rowid, row);
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
                localdata: generatedata(25),
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
                    // and with parameter false if the synchronization failed.
                    commit(true);
                },
                deleterow: (rowid, commit) => {
                    // synchronize with the server - send delete command
                    // call commit with parameter true if the synchronization with the server is successful 
                    // and with parameter false if the synchronization failed.
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
                { text: 'Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
            ];

        return (
            <div>
                <JqxGrid ref='myGrid'
                    width={850} source={dataAdapter} pageable={true}
                    autoheight={true} columns={columns}
                />
                <div style={{ marginTop: 30 }}>
                    <div id='cellbegineditevent' />
                    <div style={{ marginTop: 10 }} id='cellendeditevent' />
                </div>
                <JqxWindow ref='myWindow'
                    width={250} modalOpacity={'0.01'} resizable={false} isModal={true}
                    autoOpen={false} cancelButton={$(".Cancel")}
                >
                    <div>Edit</div>
                    <div style={{ overflow: 'hidden' }}>
                        <table>
                            <tbody>
                                <tr>
                                    <td align='right'>First Name:</td>
                                    <td align='left'><JqxInput ref='firstName' width={150} height={23} /></td>
                                </tr>
                                <tr>
                                    <td align='right'>Last Name:</td>
                                    <td align='left'><JqxInput ref='lastName' width={150} height={23} /></td>
                                </tr>
                                <tr>
                                    <td align='right'>Product:</td>
                                    <td align='left'><JqxInput ref='product' width={150} height={23} /></td>
                                </tr>
                                <tr>
                                    <td align='right'>Quantity:</td>
                                    <td align='left'>
                                        <JqxNumberInput ref='quantity'
                                            width={150} height={23} decimalDigits={0} spinButtons={true}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td align='right'>Price:</td>
                                    <td align='left'>
                                        <JqxNumberInput ref='price'
                                            width={150} height={23} symbol={'$'} spinButtons={true}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td align='right'></td>
                                    <td style={{ paddingTop: 10 }} align='right'>
                                        <JqxButton style={{ marginRight: 5, float: 'left' }} ref='SaveBtn' value='Save' />
                                        <JqxButton style={{ float: 'left' }} ref='CancelBtn' value='Cancel' />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </JqxWindow>
                <JqxMenu ref='myMenu'
                    width={200} height={58} mode={'popup'} autoOpenPopup={false}
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
