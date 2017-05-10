import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            observableArray: new $.jqx.observableArray(generatedata(2), (changed) => {
                this.updateLog(this.state.observableArray);
            })
        };
    }
    componentDidMount() {
        this.updateLog(this.state.observableArray);

        this.refs.addItem.on('click', () => {
            let row = generatedata(1)[0];
            let temp = this.state.observableArray;
            temp.push(row);
            this.setState({
                observableArray: temp
            });
        });
        this.refs.deleteItem.on('click', () => {
            if (this.state.observableArray.length > 0) {
                let temp = this.state.observableArray;
                temp.splice(0, 1);
                this.setState({
                    observableArray: temp
                });
            }
        });
        this.refs.updatePath.on('click', () => {
            if (this.state.observableArray.length > 0) {
                let row = generatedata(1)[0];
                let temp = this.state.observableArray;
                temp.set('0.firstname', row.firstname);
                temp.set('0.lastname', row.lastname);
                this.setState({
                    observableArray: temp
                });
            }
        });
        this.refs.updateItem.on('click', () => {
            if (this.state.observableArray.length > 0) {
                let row = generatedata(1)[0];
                let temp = this.state.observableArray;
                temp.set(0, row);
                this.setState({
                    observableArray: temp
                });
            }
        });
    }
    updateLog(observableArray) {
        let rows = '';
        for (let i = 0; i < observableArray.length; i++) {
            rows += observableArray.toJSON(['firstname', 'lastname', 'productname', 'quantity', 'price', 'total'], observableArray[i]);
            rows += '<br/>';
        }     
        let container = document.getElementById('log');
        container.innerHTML = rows;
    }
    render() {    

        let source =
            {
                localdata: this.state.observableArray,
                datatype: 'obserableArray',
                datafields:
                [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' },
                    { name: 'total', type: 'number' }
                ]
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns =
            [
                { text: 'Name', datafield: 'firstname', width: 120 },
                { text: 'Last Name', datafield: 'lastname', width: 120 },
                { text: 'Product', datafield: 'productname', width: 180 },
                { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
                { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                { text: 'Total', datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
            ];

        return (
            <div>
                <JqxGrid
                    width={850} height={150} source={dataAdapter}
                    sortable={true} columnsresize={true} editable={true}
                    columns={columns} selectionmode={'multiplecellsadvanced'}
                />
                <br /><br />
                <JqxButton ref='addItem' value='Add Item' style={{ float: 'left' }}/>
                <JqxButton ref='deleteItem' value='Delete Item' style={{ float: 'left' }}/>
                <JqxButton ref='updateItem' value='Update Item' style={{ float: 'left' }}/>
                <JqxButton ref='updatePath' value='Update Path' style={{ float: 'left' }}/>
                <br />
                <div id='log' style={{ clear: 'both' }} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
