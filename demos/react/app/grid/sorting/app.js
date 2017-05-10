import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';
import JqxPanel from '../../../jqwidgets-react/react_jqxpanel.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myGrid.on('sort', (event) => {
            this.refs.myPanel.clearcontent();
            let sortinformation = event.args.sortinformation;
            let sortdirection = sortinformation.sortdirection.ascending ? 'ascending' : 'descending';
            if (!sortinformation.sortdirection.ascending && !sortinformation.sortdirection.descending) {
                sortdirection = 'null';
            }
            let eventData = 'Triggered "sort" event <div>Column:' + sortinformation.sortcolumn + ', Direction: ' + sortdirection + '</div>';
            this.refs.myPanel.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
        });

        // clear the sorting.
        this.refs.clearsortingbutton.on('click', () => {
            this.refs.myGrid.removesort();
        });

        // show/hide sort background
        this.refs.sortbackground.on('change', (event) => {
            this.refs.myGrid.showsortcolumnbackground(event.args.checked);
        });
    }
    render() {
        let source =
            {
                datatype: 'xml',
                datafields: [
                    { name: 'ShippedDate', map: 'm\\:properties>d\\:ShippedDate', type: 'date' },
                    { name: 'Freight', map: 'm\\:properties>d\\:Freight', type: 'float' },
                    { name: 'ShipName', map: 'm\\:properties>d\\:ShipName', type: 'string' },
                    { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress', type: 'string' },
                    { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity', type: 'string' },
                    { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry', type: 'string' }
                ],
                root: 'entry',
                record: 'content',
                id: { name: 'OrderID', map: 'm\\:properties>d\\:OrderID' },
                url: '../sampledata/orders.xml',
                sortcolumn: 'ShipName',
                sortdirection: 'asc'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);


        let columns =
            [
                { text: 'Ship Name', datafield: 'ShipName', width: 250 },
                { text: 'Shipped Date', datafield: 'ShippedDate', width: 100, cellsformat: 'yyyy-MM-dd' },
                { text: 'Freight', datafield: 'Freight', width: 80, cellsformat: 'F2', cellsalign: 'right' },
                { text: 'Ship Address', datafield: 'ShipAddress', width: 350 },
                { text: 'Ship City', datafield: 'ShipCity', width: 100 },
                { text: 'Ship Country', datafield: 'ShipCountry', width: 101 }
            ];

        return (
            <div style={{ fontSize: 13, fontFamily: 'Verdana', float: 'left' }}>
                <JqxGrid ref='myGrid'
                    width={850} height={450} source={dataAdapter}
                    sortable={true} altrows={true} filterable={true}
                    columns={columns} selectionmode={'multiplecellsadvanced'}
                />
                <div id='eventslog' style={{ marginTop: 30 }}>
                    <div style={{ float: 'left', marginRight: 10 }}>
                        <JqxButton value='Remove Sort' ref='clearsortingbutton' height={25} />
                        <JqxCheckBox style={{ marginTop: 10 }} ref='sortbackground' value='Sort Background'
                            height={25} checked={true}
                        />
                    </div>
                    <div style={{ marginLeft: 100, float: 'left' }}>
                        Event Log:
                        <JqxPanel style={{ border: 'none' }} ref='myPanel'
                            width={300} height={80}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
