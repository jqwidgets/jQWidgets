import React from 'react';
import ReactDOM from 'react-dom';

import JqxListBox from '../../../jqwidgets-react/react_jqxlistbox.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myListBox.checkIndex(0);
        this.refs.myListBox.checkIndex(1);
        this.refs.myListBox.checkIndex(2);
        this.refs.myListBox.checkIndex(5);

        this.refs.myListBox.on('checkChange', (event) => {
            let eventsContainer = document.getElementById('Events');
            let checkedItemsContainer = document.getElementById('CheckedItems');

            if (event.args.checked) {
                eventsContainer.innerHTML = 'Checked: ' + event.args.label;
            }
            else {
                eventsContainer.innerHTML = 'Unchecked: ' + event.args.label;
            }

            let items = this.refs.myListBox.getCheckedItems();
            let checkedItems = '';

            for (let i = 0; i < items.length; i++) {
                if (i < items.length - 1) {
                    checkedItems += items[i].label + ', ';
                }
                else checkedItems += items[i].label;
            }

            checkedItemsContainer.innerHTML = checkedItems;
        });
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
                    width={200} height={250}
                    source={source} checkboxes={true}
                />
                <div style={{ marginTop: 20, fontSize: 13, fontFamily: 'Verdana' }} id='Events' />
                <div style={{ marginTop: 10, fontSize: 13, fontFamily: 'Verdana' }} id='CheckedItems' />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
