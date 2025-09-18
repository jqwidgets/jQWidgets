import * as React from 'react';
import { useRef, useEffect } from 'react';
import JqxListBox, { IListBoxProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistbox';

function App() {
    const myListBox = useRef<JqxListBox>(null);
    const select = useRef<HTMLSelectElement>(null);
    const updating = useRef(false);

    useEffect(() => {
        if (myListBox.current) {
            myListBox.current.loadFromSelect('select');
        }
    }, []);

    const change = (event: React.ChangeEvent<HTMLSelectElement>) => {
        updating.current = true;
        const index = select.current!.selectedIndex;
        myListBox.current!.selectIndex(index);
        myListBox.current!.ensureVisible(index);
        updating.current = false;
    };

    const selectItem = (event: any) => {
        if (event.args && !updating.current) {
            const index = event.args.item.index;
            if (select.current) {
                select.current.selectedIndex = index;
            }
        }
    };

    return (
        <div>
            <div style={{ float: 'left' }}>
                <JqxListBox
                    theme="material-purple"
                    ref={myListBox}
                    onSelect={selectItem}
                    width={200}
                    height={250}
                />
            </div>
            <div style={{ float: 'left' }}>
                <select
                    ref={select}
                    id="select"
                    style={{ height: '250px', width: '200px', marginLeft: '30px' }}
                    size={2}
                    onChange={change}
                    defaultValue="The Flat White"
                >
                    <option>Affogato</option>
                    <option>Americano</option>
                    <option>Bicerin</option>
                    <option>Breve</option>
                    <option>Café Bombón</option>
                    <option>Caffé Corretto</option>
                    <option>Café Crema</option>
                    <option>Caffé Latte</option>
                    <option>Caffé macchiato</option>
                    <option>Café mélange</option>
                    <option>Coffee milk</option>
                    <option>Cafe mocha</option>
                    <option>Cappuccino</option>
                    <option>Carajillo</option>
                    <option>Cuban espresso</option>
                    <option>Espresso</option>
                    <option>The Flat White</option>
                    <option>Frappuccino</option>
                    <option>Galao</option>
                    <option>Greek frappé coffee</option>
                    <option>Iced Coffee﻿</option>
                    <option>Indian filter coffee</option>
                    <option>Instant coffee</option>
                    <option>Irish coffee</option>
                    <option>Liqueur coffee</option>
                </select>
            </div>
        </div>
    );
}

export default App;