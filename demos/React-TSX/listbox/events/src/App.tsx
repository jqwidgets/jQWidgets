import * as React from 'react';
import { useRef, useState, useCallback } from 'react';
import JqxListBox, { IListBoxProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistbox';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';

function App() {
    const myListBox = useRef<JqxListBox>(null);
    const myPanel = useRef<JqxPanel>(null);
    const [source] = useState<IListBoxProps['source']>([
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
    ]);

    const onSelect = useCallback((event: any) => {
        const item = myListBox.current?.getItem(event.args.index);
        if (item != null) {
            myPanel.current?.prepend('<div style="margin-top: 5px;">Selected: ' + item.label + '</div>');
        }
    }, []);

    const onUnselect = useCallback((event: any) => {
        const item = myListBox.current?.getItem(event.args.index);
        if (item != null) {
            myPanel.current?.prepend('<div style="margin-top: 5px;">Unselected: ' + item.label + '</div>');
        }
    }, []);

    return (
        <div>
            <JqxListBox
                theme={'material-purple'}
                ref={myListBox}
                style={{ float: 'left', marginLeft: '20px', marginTop: '10px' }}
                onSelect={onSelect}
                onUnselect={onUnselect}
                width={200}
                height={250}
                source={source}
            />
            <div style={{ float: 'left', marginLeft: '20px', marginTop: '10px' }}>
                <div>
                    <span>Events:</span>
                    <JqxPanel theme={'material-purple'} ref={myPanel} style={{ border: 'none' }} width={200} height={250} />
                </div>
            </div>
        </div>
    );
}

export default App;