import React from 'react';
import ReactDOM from 'react-dom';

import JqxListBox from '../../../jqwidgets-react/react_jqxlistbox.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myListBox.loadFromSelect('select');

        let select = document.getElementById('select');
        let updating = false;

        this.refs.myListBox.on('select', (event) => {
            if (event.args && !updating) {
                // select the item in the 'select' tag.
                let index = event.args.item.index;
                select.selectedIndex = event.args.item.value;
            }
        });

        select.addEventListener('change', (event) => {
            updating = true;
            let index = select.selectedIndex;
            this.refs.myListBox.selectIndex(index);
            this.refs.myListBox.ensureVisible(index);
            updating = false;
        });
    }
    render() {
        return (
            <div style={{ float: 'left', width: 500 }}>
                <JqxListBox ref='myListBox' style={{ float: 'left' }}
                    width={200} height={250}
                />
                <div style={{ float: 'left' }}>
                    <select style={{ height: 250, width: 200, marginLeft: 30 }} size='2' id='select'>
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
                        <option selected='true'>The Flat White</option>
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
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
