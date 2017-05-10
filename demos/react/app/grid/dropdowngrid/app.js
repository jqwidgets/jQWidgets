import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';
import JqxDropDownButton from '../../../jqwidgets-react/react_jqxdropdownbutton.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myGrid.on('rowselect', (event) => {
            let args = event.args;
            let row = this.refs.myGrid.getrowdata(args.rowindex);
            let dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 5px;">' + row['firstname'] + ' ' + row['lastname'] + '</div>';
            this.refs.myDropDownButton.setContent(dropDownContent);
        });

        this.refs.myGrid.selectrow(0);
    }
    render() {
        let data = generatedata(100);

        let source =
            {
                localdata: data,
                datafields:
                [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' }
                ],
                datatype: 'array',
                updaterow: (rowid, rowdata) => {
                    // synchronize with the server - send update command   
                }
            };

        let dataAdapter = new $.jqx.dataAdapter(source);


        let columns =
            [
                { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 90 },
                { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 90 },
                { text: 'Product', columntype: 'dropdownlist', datafield: 'productname', width: 180 },
                { text: 'Quantity', datafield: 'quantity', width: 70, cellsalign: 'right' },
                { text: 'Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
            ];

        return (
            <JqxDropDownButton ref='myDropDownButton' width={150} height={25}>
                <JqxGrid ref='myGrid'
                    width={550} source={dataAdapter} pageable={true}
                    columnsresize={true} autoheight={true} columns={columns}
                />
            </JqxDropDownButton>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
