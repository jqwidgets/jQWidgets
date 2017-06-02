import React from 'react';
import ReactDOM from 'react-dom';

import JqxListBox from '../../../jqwidgets-react/react_jqxlistbox.js';
import JqxPanel from '../../../jqwidgets-react/react_jqxpanel.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myListBox.disableAt(5);

        this.refs.myListBox.on('select', (event) => {
            let item = this.refs.myListBox.getItem(event.args.index);
            if (item != null) {
                this.refs.myPanel.prepend('<div style="margin-top: 5px;">Selected: ' + item.label + '</div>');
            }
        });

        this.refs.myListBox.on('unselect', (event) => {
            let item = this.refs.myListBox.getItem(event.args.index);
            if (item != null) {
                this.refs.myPanel.prepend('<div style="margin-top: 5px;">Unselected: ' + item.label + '</div>');
            }
        });
    }
    render() {
        let source =
            [
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
                <JqxListBox ref='myListBox' style={{ float: 'left', marginTop: 10 }}
                    width={200} height={250} source={source}
                />
                <div style={{ marginLeft: 20, marginTop: 10, float: 'left' }}>
                    <div>
                        <span>Events:</span>
                        <JqxPanel ref='myPanel' style={{ border: 'none' }}
                            width={200} height={250}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
