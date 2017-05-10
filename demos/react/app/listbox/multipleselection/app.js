import React from 'react';
import ReactDOM from 'react-dom';

import JqxListBox from '../../../jqwidgets-react/react_jqxlistbox.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myListBox.selectIndex(2);
        this.refs.myListBox.selectIndex(5);
        this.refs.myListBox.selectIndex(7);

        this.displaySelectedItems();

        this.refs.myListBox.on('change', () => {
            this.displaySelectedItems();
        });
    }
    displaySelectedItems() {
        let items = this.refs.myListBox.getSelectedItems();
        let selection = 'Selected Items: ';
        for (let i = 0; i < items.length; i++) {
            selection += items[i].label + (i < items.length - 1 ? ', ' : '');
        }
        document.getElementById('selectionLog').innerHTML = selection;
    }
    render() {
        let source =
            [
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
                <JqxListBox ref='myListBox'
                    width={200} height={250}
                    source={source} multiple={true}
                />
                <div style={{ marginTop: 30, fontSize: 13, fontFamily: 'Verdana' }} id='selectionLog' />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
