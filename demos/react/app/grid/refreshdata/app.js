import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    constructor() {
        super();

        let source =
            {
                localdata: generatedata(500),
                datafields:
                [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' },
                    { name: 'total', type: 'number' }
                ],
                datatype: 'array'
            };

        this.state = {
            source: source
        };
    }
    componentDidMount() {
        this.refs.refreshBtn.on('click', () => {
            let temp = this.state.source;
            temp.localdata = generatedata(500);
            this.setState({
                source: temp
            });
            // passing 'cells' to the 'updatebounddata' method will refresh only the cells values when the new rows count is equal to the previous rows count.
            this.refs.myGrid.updatebounddata('cells');
        });
        this.refs.clearBtn.on('click', () => {
            this.refs.myGrid.clear();
        });
    }
    render() {

        let dataAdapter = new $.jqx.dataAdapter(this.state.source);

        let columns =
            [
                { text: 'First Name', dataField: 'firstname', width: 130 },
                { text: 'Last Name', dataField: 'lastname', width: 130 },
                { text: 'Product', dataField: 'productname', width: 180 },
                { text: 'Quantity', dataField: 'quantity', width: 80, cellsalign: 'right' },
                { text: 'Unit Price', dataField: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                { text: 'Total', dataField: 'total', cellsalign: 'right', minwidth: 100, cellsformat: 'c2' }
            ];

        return (
            <div>
                <JqxGrid ref='myGrid'
                    width={850} height={300} source={dataAdapter} columns={columns}
                />
                <div style={{ marginTop: 10 }}>
                    <JqxButton ref='refreshBtn' value='Refresh Data' style={{ float: 'left' }}/>
                    <JqxButton ref='clearBtn' value='Clear' style={{ float: 'left' }}/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
