import React from 'react';
import ReactDOM from 'react-dom';

import JqxComboBox from '../../../jqwidgets-react/react_jqxcombobox.js';
import JqxPanel from '../../../jqwidgets-react/react_jqxpanel.js';

class App extends React.Component {
    componentDidMount() {
        document.getElementsByClassName('events')[0].style.border = 'none';

        this.refs.myComboBox.on('select', (event) => {
            let args = event.args;
            if (args != undefined) {
                let item = event.args.item;
                if (item != null) {
                    this.refs.myPanel.prepend('<div style="margin-top: 5px;">Selected: ' + item.label + '</div>');
                }
            }
        });
        this.refs.myComboBox.on('unselect', (event) => {
            let args = event.args;
            if (args != undefined) {
                let item = event.args.item; if (item != null) {
                    this.refs.myPanel.prepend('<div style="margin-top: 5px;">Unselected: ' + item.label + '</div>');
                }
            }
        });
    }
    render() {      
        let source = [
            'Affogato',
            'Americano',
            'Bicerin',
            'Breve',
            'Café Bombón',
            'Café au lait',
            'Caffé Corretto',
            'Café Crema',
            'Caffé Latte',
            'Caffé macchiato',
            'Café mélange',
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
            'Greek frappé coffee',
            'Iced Coffee﻿',
            'Indian filter coffee',
            'Instant coffee',
            'Irish coffee',
            'Liqueur coffee'
        ];
        return (
            <div style={{ float: 'left', width: 500 }}>
                <JqxComboBox style={{ float: 'left', marginTop: 10 }} ref='myComboBox'
                    width={200} height={25} source={source}
                />
                <div style={{ fontSize: 12, fontFamily: 'Verdana', marginLeft: 20, marginTop: 10, float: 'left' }}>
                    <span>Events:</span>
                    <JqxPanel ref='myPanel' className='events'
                        width={200} height={250}
                    />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
