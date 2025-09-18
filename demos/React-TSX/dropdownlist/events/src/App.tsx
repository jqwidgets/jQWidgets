import * as React from 'react';

import './App.css';

import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';

const source = [
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

const App = () => {
    const myPanel = React.useRef<JqxPanel>(null);

    const onSelect = (event: any): void => {
        const args = event.args;
        if (args !== undefined) {
            const item = args.item;
            if (item !== null) {
                myPanel.current?.prepend(`<div style="margin-top: 5px;">Selected: ${item.label}</div>`);
            }
        }
    };

    const onUnselect = (event: any): void => {
        const args = event.args;
        if (args !== undefined) {
            const item = args.item;
            if (item !== null) {
                myPanel.current?.prepend(`<div style="margin-top: 5px;">Unselected: ${item.label}</div>`);
            }
        }
    };

    return (
        <div>
            <JqxDropDownList
                theme="material-purple"
                style={{ float: 'left', marginTop: '10px' }}
                onSelect={onSelect}
                onUnselect={onUnselect}
                width={200}
                height={30}
                source={source}
                selectedIndex={0}
            />
            <div style={{ float: 'left', marginLeft: '20px', marginTop: '10px' }}>
                <span>Events:</span>
                <JqxPanel
                    theme="material-purple"
                    ref={myPanel}
                    width={200}
                    height={250}
                />
            </div>
        </div>
    );
};

export default App;
