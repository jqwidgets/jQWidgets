import React from 'react';
import ReactDOM from 'react-dom';

import JqxListBox from '../../../jqwidgets-react/react_jqxlistbox.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myListBox.focus();

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
                'Cafe Bombon',
                'Cafe au lait',
                'Caffe Corretto',
                'Cafe Crema',
                'Caffe Latte',
                'Caffe macchiato',
                'Cafe melange',
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
                'Greek frappe coffee',
                'Iced Coffee﻿',
                'Indian filter coffee',
                'Instant coffee',
                'Irish coffee',
                'Liqueur coffee'
            ];
        return (
            <div>
                <JqxListBox ref='myListBox'
                    width={200} height={250} selectedIndex={1}
                    source={source} multipleextended={true}
                />
                <div style={{ marginTop: 30, fontSize: 13, fontFamily: 'Verdana' }} id='selectionLog' />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
