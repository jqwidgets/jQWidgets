import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myDropDownList.on('select', (event) => {
            let index = event.args.index;
            let editMode = index == 0 ? 'click' : index == 1 ? 'dblclick' : 'selectedcell';
            this.refs.myGrid.editmode(editMode);
        });
        this.refs.firstname.on('change', (event) => {
            this.refs.myGrid.setcolumnproperty('firstname', 'editable', event.args.checked);
        });
        this.refs.lastname.on('change', (event) => {
            this.refs.myGrid.setcolumnproperty('lastname', 'editable', event.args.checked);
        });
        this.refs.productname.on('change', (event) => {
            this.refs.myGrid.setcolumnproperty('productname', 'editable', event.args.checked);
        });
        this.refs.available.on('change', (event) => {
            this.refs.myGrid.setcolumnproperty('available', 'editable', event.args.checked);
        });
        this.refs.quantity.on('change', (event) => {
            this.refs.myGrid.setcolumnproperty('quantity', 'editable', event.args.checked);
        });
    }
    render() {
        let source =
            {
                localdata: generatedata(200),
                datatype: 'array',
                updaterow: (rowid, rowdata, commit) => {
                    // synchronize with the server - send update command
                    // call commit with parameter true if the synchronization with the server is successful 
                    // and with parameter false if the synchronization failed.
                    commit(true);
                },
                datafields:
                [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'available', type: 'bool' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' }
                ]
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns =
            [
                { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 90 },
                { text: 'Last Name', datafield: 'lastname', width: 90 },
                { text: 'Product', datafield: 'productname' },
                { text: 'Quantity', datafield: 'quantity', width: 70, cellsalign: 'right' },
                { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67 }
            ];

        return (
            <div style={{ fontSize: 13, fontFamily: 'Verdana', float: 'left' }}>
                <JqxGrid ref='myGrid'
                    width={850} source={dataAdapter} editable={true}
                    editmode={'click'} columns={columns}
                    selectionmode={'singlecell'}
                />
                <div style={{ marginTop: 20 }}>
                    <div style={{ float: 'left', marginTop: 10 }} >
                        <span>Edit Mode:</span>
                        <JqxDropDownList style={{ marginTop: 5 }} ref='myDropDownList'
                            width={150} height={25} selectedIndex={0}
                            dropDownWidth={150} autoDropDownHeight={true}
                            source={['Click', 'Double-Click', 'Selected Cell Click']}
                        />
                    </div>
                    <div style={{ float: 'left', marginLeft: 20, marginTop: 10 }}>
                        <span>Editable Columns:</span>
                        <div>
                            <div style={{ float: 'left' }}>
                                <JqxCheckBox style={{ marginTop: 5 }} ref='firstname' value='First Name' checked={true} />
                                <JqxCheckBox style={{ marginTop: 5 }} ref='lastname' value='Last Name' checked={true} />
                                <JqxCheckBox style={{ marginTop: 5 }} ref='quantity' value='Quantity' checked={true} />
                            </div>
                            <div style={{ float: 'left', marginLeft: 20 }}>
                                <JqxCheckBox style={{ marginTop: 5 }} ref='productname' value='Product' checked={true} />
                                <JqxCheckBox style={{ marginTop: 5 }} ref='available' value='Available' checked={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
