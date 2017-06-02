import React from 'react';
import ReactDOM from 'react-dom';

import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';
import JqxPanel from '../../../jqwidgets-react/react_jqxpanel.js';

class App extends React.Component {
    componentDidMount() {
        document.getElementsByClassName('myPanel')[0].style.border = 'none';

        this.refs.myDropDownList.on('select', (event) => {
            let args = event.args;
            let item = this.refs.myDropDownList.getItem(args.index);
            if (item != null) {
                this.refs.myPanel.prepend('<div style="margin-top: 5px;">Selected: ' + item.label + '</div>');
            }
        });
        this.refs.myDropDownList.on('unselect', (event) => {
            let args = event.args;
            let item = this.refs.myDropDownList.getItem(args.index);
            if (item != null) {
                this.refs.myPanel.prepend('<div style="margin-top: 5px;">Unselected: ' + item.label + '</div>');
            }
        });
    }
    render() {
        let source = [
            'Affogato',
            'Americano',
            'Bicerin',
            'Breve',
            'Cafe Bombon',
            'Cafe au lait',
            'Caffe Corretto',
            'Cafe Crema',
            'Caffe Latte',
            'Caffe macchiato',
            'Cafe melange',
            'Coffee milk',
            'Cafe mocha',
            'Cappuccino',
            'Carajillo',
            'Cortado',
            'Cuban espresso',
            'Espresso',
            'Eiskaffee',
            'The Flat White',
            'Frappuccino',
            'Galao',
            'Greek frappe coffee',
            'Iced Coffee﻿',
            'Indian filter coffee',
            'Instant coffee',
            'Irish coffee',
            'Liqueur coffee'
        ];
        return (
            <div style={{ float: 'left', width: 500 }}>
                <JqxDropDownList ref='myDropDownList' style={{ float: 'left', marginTop: 10 }}
                    width={200} height={25} source={source} selectedIndex={0}
                />
                <div style={{ float: 'left', marginTop: 10, marginLeft: 20 }}>
                    <div>
                        <span>Events:</span>
                        <JqxPanel ref='myPanel' className='myPanel' width={200} height={250} />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
