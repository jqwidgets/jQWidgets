import * as React from 'react';
 


import JqxMenu, { IMenuProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxmenu';

class App extends React.PureComponent<{}, IMenuProps> {

    private eventLog = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
        this.onItemClick = this.onItemClick.bind(this);

        const data = [
            {
                'id': '12',
                'parentid': '-1',
                'subMenuWidth': '250px',
                'text': 'Frappuccino'
            },
            {
                'id': '1',
                'parentid': '-1',
                'subMenuWidth': '250px',
                'text': 'Chocolate Beverage'
            },
            {
                'id': '2',
                'parentid': '1',
                'text': 'Hot Chocolate'
            },
            {
                'id': '3',
                'parentid': '1',
                'text': 'Peppermint Hot Chocolate'
            },
            {
                'id': '4',
                'parentid': '1',
                'text': 'Salted Caramel Hot Chocolate'
            },
            {
                'id': '5',
                'parentid': '1',
                'text': 'White Hot Chocolate'
            },
            {
                'id': '6',
                'parentid': '-1',
                'subMenuWidth': '200px',
                'text': 'Espresso Beverage'
            },
            {
                'id': '7',
                'parentid': '6',
                'text': 'Caffe Americano'
            },
            {
                'id': '8',
                'parentid': '6',
                'text': 'Caffe Latte'
            },
            {
                'id': '9',
                'parentid': '6',
                'text': 'Caffe Mocha'
            },
            {
                'id': '10',
                'parentid': '6',
                'text': 'Cappuccino'
            },
            {
                'id': '11',
                'parentid': '6',
                'text': 'Pumpkin Spice Latte'
            },
            {
                'id': '13',
                'parentid': '12',
                'text': 'Caffe Vanilla Frappuccino'
            },
            {
                'id': '15',
                'parentid': '13',
                'text': '450 calories'
            },
            {
                'id': '16',
                'parentid': '13',
                'text': '16g fat'
            },
            {
                'id': '17',
                'parentid': '13',
                'text': '13g protein'
            },
            {
                'id': '14',
                'parentid': '12',
                'text': 'Caffe Vanilla Frappuccino Light'
            }
        ];

        const source: any = {
            datafields: [
                { name: 'id' },
                { name: 'parentid' },
                { name: 'text' },
                { name: 'subMenuWidth' }
            ],
            datatype: 'json',
            id: 'id',
            localdata: data
        };

        const dataAdapter = new jqx.dataAdapter(source, { autoBind: true });

        this.state = {
            source: dataAdapter.getRecordsHierarchy('id', 'parentid', 'items', [{ name: 'text', map: 'label' }])
        }
    }

    public render() {
        return (
            <div>
                <JqxMenu theme={'material-purple'} onItemclick={this.onItemClick}
                    width={370} height={30} source={this.state.source} />
                <div ref={this.eventLog} style={{ marginTop: '50px', fontSize: '13px', fontFamily: 'Verdana' }} />
            </div>
        );
    }

    private onItemClick(event: any): void {
        this.eventLog.current!.innerHTML = 'Id: ' + event.args.id + ', Text: ' + event.args.innerText;
    };
}

export default App;