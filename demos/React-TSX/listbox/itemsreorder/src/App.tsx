import * as React from 'react';
import JqxListBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistbox';

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
        'Cafe mocha'
    ];

    return (
        <JqxListBox
            theme="material-purple"
            width={200}
            height={250}
            source={source}
            allowDrag={true}
            allowDrop={true}
        />
    );
};

export default App;