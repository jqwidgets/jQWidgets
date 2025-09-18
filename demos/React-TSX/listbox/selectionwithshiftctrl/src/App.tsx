import React, { useRef, useEffect, useState, useCallback } from 'react';
import JqxListBox, { IListBoxProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistbox';

function App() {
    const myListBox = useRef<JqxListBox>(null);
    const selectionLog = useRef<HTMLDivElement>(null);

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

    const onChange = useCallback((event: any) => {
        const items = myListBox.current!.getSelectedItems();
        let selection = 'Selected Items: ';
        for (let i = 0; i < items.length; i++) {
            selection += items[i].label + (i < items.length - 1 ? ', ' : '');
        }
        if (selectionLog.current) {
            selectionLog.current.innerHTML = selection;
        }
    }, []);

    useEffect(() => {
        if (myListBox.current) {
            myListBox.current.focus();
        }
    }, []);

    return (
        <div>
            <JqxListBox
                theme="material-purple"
                ref={myListBox}
                onChange={onChange}
                width={200}
                height={250}
                source={source}
                selectedIndex={1}
                multipleextended={true}
            />
            <div
                ref={selectionLog}
                style={{ marginTop: '30px', fontSize: '13px', fontFamily: 'Verdana' }}
            />
        </div>
    );
}

export default App;