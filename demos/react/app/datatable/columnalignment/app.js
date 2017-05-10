import React from 'react';
import ReactDOM from 'react-dom';

import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.columnAlignment.on('change', (event) => {
            let index = event.args.index;
            switch (index) {
                case 0:
                    this.refs.myDataTable.setColumnProperty('ShippedDate', 'align', 'left');
                    this.refs.myDataTable.setColumnProperty('Freight', 'align', 'left');
                    break;
                case 1:
                    this.refs.myDataTable.setColumnProperty('ShippedDate', 'align', 'center');
                    this.refs.myDataTable.setColumnProperty('Freight', 'align', 'center');
                    break;
                case 2:
                    this.refs.myDataTable.setColumnProperty('ShippedDate', 'align', 'right');
                    this.refs.myDataTable.setColumnProperty('Freight', 'align', 'right');
                    break;
            }
        });

        this.refs.cellsAlignment.on('change', (event) => {
            let index = event.args.index;
            switch (index) {
                case 0:
                    this.refs.myDataTable.setColumnProperty('ShippedDate', 'cellsAlign', 'left');
                    this.refs.myDataTable.setColumnProperty('Freight', 'cellsAlign', 'left');
                    break;
                case 1:
                    this.refs.myDataTable.setColumnProperty('ShippedDate', 'cellsAlign', 'center');
                    this.refs.myDataTable.setColumnProperty('Freight', 'cellsAlign', 'center');
                    break;
                case 2:
                    this.refs.myDataTable.setColumnProperty('ShippedDate', 'cellsAlign', 'right');
                    this.refs.myDataTable.setColumnProperty('Freight', 'cellsAlign', 'right');
                    break;
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
                { text: 'Shipped Date', datafield: 'ShippedDate', width: '50%', cellsFormat: 'D' },
                { text: 'Freight', datafield: 'Freight', width: '50%', cellsFormat: 'F2' }
            ];

        let dropDownsSource = ['Left', 'Center', 'Right'];

        return (
            <div>
                <JqxDataTable ref='myDataTable'
                    width={850} source={dataAdapter} columnsResize={true}
                    pageable={true} sortable={true} columns={columns}
                />
                <div style={{ fontSize: 13, fontFamily: 'Verdana', width: 600, marginTop: 10 }}>
                    <div style={{ float: 'left', width: 300 }}>
                        <h4>Column Alignment</h4>
                        <JqxDropDownList ref='columnAlignment'
                            height={25} autoDropDownHeight={true}
                            selectedIndex={0} source={dropDownsSource}
                        />
                    </div>
                    <div style={{ float: 'left', width: 300 }}>
                        <h4>Cells Alignment</h4>
                        <JqxDropDownList ref='cellsAlignment'
                            height={25} autoDropDownHeight={true}
                            selectedIndex={0} source={dropDownsSource}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
