import React from 'react';
import ReactDOM from 'react-dom';

import JqxTreeGrid from '../../../jqwidgets-react/react_jqxtreegrid.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myTreeGrid.expandRow(2);
        
        this.refs.dateFormats.on('change', (event) => {
            var index = event.args.index;
            switch (index) {
                case 0:
                    this.refs.myTreeGrid.setColumnProperty('date', 'cellsFormat', 'd');
                    break;
                case 1:
                    this.refs.myTreeGrid.setColumnProperty('date', 'cellsFormat', 'D');
                    break;
                case 2:
                    this.refs.myTreeGrid.setColumnProperty('date', 'cellsFormat', 'f');
                    break;
                case 3:
                    this.refs.myTreeGrid.setColumnProperty('date', 'cellsFormat', 'F');
                    break;
                case 4:
                    this.refs.myTreeGrid.setColumnProperty('date', 'cellsFormat', 'Y');
                    break;
                case 5:
                    this.refs.myTreeGrid.setColumnProperty('date', 'cellsFormat', 'M');
                    break;
                case 6:
                    this.refs.myTreeGrid.setColumnProperty('date', 'cellsFormat', 'yyyy-MM-dd HH:mm:ss');
                    break;
            }
        });

        this.refs.numberFormats.on('change', (event) => {
            var index = event.args.index;
            switch (index) {
                case 0:
                    this.refs.myTreeGrid.setColumnProperty('price', 'cellsFormat', 'n');
                    break;
                case 1:
                    this.refs.myTreeGrid.setColumnProperty('price', 'cellsFormat', 'f1');
                    break;
                case 2:
                    this.refs.myTreeGrid.setColumnProperty('price', 'cellsFormat', 'f2');
                    break;
                case 3:
                    this.refs.myTreeGrid.setColumnProperty('price', 'cellsFormat', 'f3');
                    break;
                case 4:
                    this.refs.myTreeGrid.setColumnProperty('price', 'cellsFormat', 'c1');
                    break;
                case 5:
                    this.refs.myTreeGrid.setColumnProperty('price', 'cellsFormat', 'c2');
                    break;
                case 6:
                    this.refs.myTreeGrid.setColumnProperty('price', 'cellsFormat', 'c3');
                    break;
                case 7:
                    this.refs.myTreeGrid.setColumnProperty('price', 'cellsFormat', 'p');
                    break;
                case 8:
                    this.refs.myTreeGrid.setColumnProperty('price', 'cellsFormat', 'p2');
                    break;
                case 9:
                    this.refs.myTreeGrid.setColumnProperty('price', 'cellsFormat', 'p3');
                    break;
            }
        });
    }
    render () {
        // prepare the data
        let source = {
            dataType: 'array',
            dataFields: [
                { name: 'name', type: 'string' },
                { name: 'quantity', type: 'number' },
                { name: 'id', type: 'number' },
                { name: 'parentid', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'date', type: 'date' },
                { name: 'customer', type: 'string' }
            ],
            hierarchy:
            {
                keyDataField: { name: 'id' },
                parentDataField: { name: 'parentid' }
            },
            id: 'id',
            localData: generateordersdata()
        };
        let dataAdapter = new $.jqx.dataAdapter(source);
        // create Tree Grid
        let columns = [
            { text: 'Order Name', dataField: 'name', align: 'center', width: 200 },
            { text: 'Customer', dataField: 'customer', align: 'center', width: 200 },
            { text: 'Price', dataField: 'price', cellsFormat: 'c2', align: 'center', cellsAlign: 'right', width: 100 },
            {
                text: 'Order Date', dataField: 'date', align: 'right', cellsFormat: 'd', cellsAlign: 'right'
            }
        ];
        let columnGroups = [{ text: 'JST Corp.', name: 'JSTCorp', align: 'center' }];
        return (
            <div>

                <JqxTreeGrid ref='myTreeGrid'
                    source={dataAdapter}
                    width={850}
                    height={350}
                    altRows={true}
                    columnsResize={true}
                    columns={columns}
                    columnGroups={columnGroups}
                />

                <div style={{ fontSize: '13px', fontFamily: 'Verdana', width: '600px', marginTop: '10px' }}>
                    <div style={{ float: 'left', width: '300px' }}>
                        <h4>Shipped Date</h4>
                        <JqxDropDownList ref='dateFormats' 
                            selectedIndex={0} autoDropDownHeight={true}
                            source={['Short Date', 'Long Date', 'Long date, Short Time', 'Long date, Long Time', 'Month/Year', 'Month/Day', 'Custom']} height={25}
                        />
                    </div>
                    <div style={{ float: 'left', width: '300px' }}>
                        <h4>Price</h4>
                        <JqxDropDownList ref='numberFormats' 
                            selectedIndex={5} autoDropDownHeight={true}
                            source={['n', 'f1', 'f2', 'f3', 'c1', 'c2', 'c3', 'p', 'p2', 'p3']} height={25}
                        />
                    </div>
                </div>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
