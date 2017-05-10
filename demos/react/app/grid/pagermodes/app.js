import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myDropDownList.on('select', (event) => {
            if (event.args.index === 0) {
                this.refs.myGrid.pagermode('default');
            }
            else {
                this.refs.myGrid.pagermode('simple');
            }
        });
    }
    render() {
        let source =
            {
                datatype: 'xml',
                datafields: [
                    { name: 'ShippedDate', map: 'm\\:properties>d\\:ShippedDate', type: 'date' },
                    { name: 'Freight', map: 'm\\:properties>d\\:Freight', type: 'float' },
                    { name: 'ShipName', map: 'm\\:properties>d\\:ShipName' },
                    { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress' },
                    { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity' },
                    { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry' }
                ],
                root: 'entry',
                record: 'content',
                id: 'm\\:properties>d\\:OrderID',
                url: '../sampledata/orders.xml',
                pager: (pagenum, pagesize, oldpagenum) => {
                    // callback called when a page or page size is changed.
                }
            };

        let dataAdapter = new $.jqx.dataAdapter(source);


        let columns =
            [
                { text: 'Ship Name', datafield: 'ShipName', width: 250 },
                { text: 'Shipped Date', datafield: 'ShippedDate', width: 230, cellsformat: 'D' },
                { text: 'Freight', datafield: 'Freight', width: 130, cellsformat: 'F2', cellsalign: 'right' },
                { text: 'Ship Address', datafield: 'ShipAddress', width: 350 },
                { text: 'Ship City', datafield: 'ShipCity', width: 100 },
                { text: 'Ship Country', datafield: 'ShipCountry', width: 101 }
            ];

        return (
            <div style={{ fontSize: 13, fontFamily: 'Verdana', float: 'left' }}>
                <JqxGrid ref='myGrid'
                    width={850} source={dataAdapter} pageable={true} pagermode={'simple'}
                    sortable={true} columnsresize={true} autoheight={true}
                    columns={columns} selectionmode={'multiplerowsextended'}
                />
                <div style={{ marginTop: 30 }}>
                    <div style={{ float: 'left' }}>
                        Pager Settings:
                        <JqxDropDownList ref='myDropDownList'
                            width={150} height={25} selectedIndex={1}
                            autoDropDownHeight={true} source={['Default', 'Simple']}
                        />
                    </div>
                </div>
            </div >
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
