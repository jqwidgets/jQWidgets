import React from 'react';
import ReactDOM from 'react-dom';

import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.dateFormats.on('change', (event) => {
            let index = event.args.index;
            switch (index) {
                case 0:
                    this.refs.myDataTable.setColumnProperty('ShippedDate', 'cellsFormat', 'd');
                    break;
                case 1:
                    this.refs.myDataTable.setColumnProperty('ShippedDate', 'cellsFormat', 'D');
                    break;
                case 2:
                    this.refs.myDataTable.setColumnProperty('ShippedDate', 'cellsFormat', 'f');
                    break;
                case 3:
                    this.refs.myDataTable.setColumnProperty('ShippedDate', 'cellsFormat', 'F');
                    break;
                case 4:
                    this.refs.myDataTable.setColumnProperty('ShippedDate', 'cellsFormat', 'Y');
                    break;
                case 5:
                    this.refs.myDataTable.setColumnProperty('ShippedDate', 'cellsFormat', 'M');
                    break;
                case 6:
                    this.refs.myDataTable.setColumnProperty('ShippedDate', 'cellsFormat', 'yyyy-MM-dd HH:mm:ss');
                    break;
            }
        });

        this.refs.numberFormats.on('change', (event) => {
            let index = event.args.index;
            switch (index) {
                case 0:
                    this.refs.myDataTable.setColumnProperty('Freight', 'cellsFormat', 'n');
                    break;
                case 1:
                    this.refs.myDataTable.setColumnProperty('Freight', 'cellsFormat', 'f');
                    break;
                case 2:
                    this.refs.myDataTable.setColumnProperty('Freight', 'cellsFormat', 'f2');
                    break;
                case 3:
                    this.refs.myDataTable.setColumnProperty('Freight', 'cellsFormat', 'f3');
                    break;
                case 4:
                    this.refs.myDataTable.setColumnProperty('Freight', 'cellsFormat', 'c');
                    break;
                case 5:
                    this.refs.myDataTable.setColumnProperty('Freight', 'cellsFormat', 'c2');
                    break;
                case 6:
                    this.refs.myDataTable.setColumnProperty('Freight', 'cellsFormat', 'c3');
                    break;
                case 7:
                    this.refs.myDataTable.setColumnProperty('Freight', 'cellsFormat', 'p');
                    break;
                case 8:
                    this.refs.myDataTable.setColumnProperty('Freight', 'cellsFormat', 'p2');
                    break;
                case 9:
                    this.refs.myDataTable.setColumnProperty('Freight', 'cellsFormat', 'p3');
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
                { text: 'Freight', datafield: 'Freight', width: '50%', cellsFormat: 'F2', cellsalign: 'right' }
            ];

        let dateSource = ['Short Date', 'Long Date', 'Long date, Short Time', 'Long date, Long Time', 'Month/Year', 'Month/Day', 'Custom'];
        let numberSource = ['n', 'f', 'f2', 'f3', 'c', 'c2', 'c3', 'p', 'p2', 'p3'];

        return (
            <div>
                <JqxDataTable ref='myDataTable'
                    width={850} source={dataAdapter} columnsResize={true}
                    pageable={true} sortable={true} columns={columns}
                />
                <div style={{ fontSize: 13, fontFamily: 'Verdana', width: 600, marginTop: 10 }}>
                    <div style={{ float: 'left', width: 300 }}>
                        <h4>Shipped Date</h4>
                        <JqxDropDownList ref='dateFormats'
                            height={25} autoDropDownHeight={true}
                            selectedIndex={1} source={dateSource}
                        />
                    </div>
                    <div style={{ float: 'left', width: 300 }}>
                        <h4>Freight</h4>
                        <JqxDropDownList ref='numberFormats'
                            height={25} autoDropDownHeight={true}
                            selectedIndex={1} source={numberSource}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
