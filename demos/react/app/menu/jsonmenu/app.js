import React from 'react';
import ReactDOM from 'react-dom';

import JqxMenu from '../../../jqwidgets-react/react_jqxmenu.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myMenu.on('itemclick', (event) => {
            let eventLog = document.getElementById('eventLog');
            eventLog.innerHTML = 'Id: ' + event.args.id + ', Text: ' + $(event.args).text();
        });
    }
    render() {
        let data = [
            {
                'id': '12',
                'text': 'Frappuccino',
                'parentid': '-1',
                'subMenuWidth': '250px'
            },
            {
                'text': 'Chocolate Beverage',
                'id': '1',
                'parentid': '-1',
                'subMenuWidth': '250px'
            }, {
                'id': '2',
                'parentid': '1',
                'text': 'Hot Chocolate'
            }, {
                'id': '3',
                'parentid': '1',
                'text': 'Peppermint Hot Chocolate'
            }, {
                'id': '4',
                'parentid': '1',
                'text': 'Salted Caramel Hot Chocolate'
            }, {
                'id': '5',
                'parentid': '1',
                'text': 'White Hot Chocolate'
            }, {
                'id': '6',
                'text': 'Espresso Beverage',
                'parentid': '-1',
                'subMenuWidth': '200px'
            }, {
                'id': '7',
                'parentid': '6',
                'text': 'Caffe Americano'
            }, {
                'id': '8',
                'text': 'Caffe Latte',
                'parentid': '6'
            }, {
                'id': '9',
                'text': 'Caffe Mocha',
                'parentid': '6'
            }, {
                'id': '10',
                'text': 'Cappuccino',
                'parentid': '6'
            }, {
                'id': '11',
                'text': 'Pumpkin Spice Latte',
                'parentid': '6'
            }, {
                'id': '13',
                'text': 'Caffe Vanilla Frappuccino',
                'parentid': '12'
            }, {
                'id': '15',
                'text': '450 calories',
                'parentid': '13'
            }, {
                'id': '16',
                'text': '16g fat',
                'parentid': '13'
            }, {
                'id': '17',
                'text': '13g protein',
                'parentid': '13'
            }, {
                'id': '14',
                'text': 'Caffe Vanilla Frappuccino Light',
                'parentid': '12'
            }]
        // prepare the data
        let source =
            {
                datatype: 'json',
                datafields: [
                    { name: 'id' },
                    { name: 'parentid' },
                    { name: 'text' },
                    { name: 'subMenuWidth' }
                ],
                id: 'id',
                localdata: data
            };
        // create data adapter.
        let dataAdapter = new $.jqx.dataAdapter(source);
        // perform Data Binding.
        dataAdapter.dataBind();

        let records = dataAdapter.getRecordsHierarchy('id', 'parentid', 'items', [{ name: 'text', map: 'label' }]);
        return (
            <div>
                <JqxMenu ref='myMenu'
                    width={400} height={30} source={records}
                />
                <div style={{ marginTop: 50, fontSize: 13, fontFamily: 'Verdana' }} id='eventLog' />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
