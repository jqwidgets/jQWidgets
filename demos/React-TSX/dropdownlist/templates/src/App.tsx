import * as React from 'react';
import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

const App = () => {
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

    return (
        <div>
            <JqxDropDownList theme="material-purple" width={200} height={30} source={source} selectedIndex={1} />
            <br />
            <JqxDropDownList theme="material-purple" width={200} height={30} source={source} selectedIndex={1} template="primary" />
            <br />
            <JqxDropDownList theme="material-purple" width={200} height={30} source={source} selectedIndex={1} template="success" />
            <br />
            <JqxDropDownList theme="material-purple" width={200} height={30} source={source} selectedIndex={1} template="info" />
            <br />
            <JqxDropDownList theme="material-purple" width={200} height={30} source={source} selectedIndex={1} template="warning" />
            <br />
            <JqxDropDownList theme="material-purple" width={200} height={30} source={source} selectedIndex={1} template="danger" />
        </div>
    );
};

export default App;