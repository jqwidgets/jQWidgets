import React from 'react';
import ReactDOM from 'react-dom';

import JqxComboBox from '../../../jqwidgets-react/react_jqxcombobox.js';

class App extends React.Component {
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
            <div>    
                <div>Default</div>
                <JqxComboBox
                    width={200} height={25} source={source}
                    selectedIndex={1}
                /><br />
                <div>Primary</div>
                <JqxComboBox
                    width={200} height={25} source={source}
                    selectedIndex={1} template={'primary'}
                /><br />
                <div>Success</div>
                <JqxComboBox
                    width={200} height={25} source={source}
                    selectedIndex={1} template={'success'}
                /><br />
                <div>Info</div>
                <JqxComboBox
                    width={200} height={25} source={source}
                    selectedIndex={1} template={'info'}
                /><br />
                <div>Warning</div>
                <JqxComboBox
                    width={200} height={25} source={source}
                    selectedIndex={1} template={'warning'}
                /><br />
                <div>Danger</div>
                <JqxComboBox
                    width={200} height={25} source={source}
                    selectedIndex={1} template={'danger'}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
