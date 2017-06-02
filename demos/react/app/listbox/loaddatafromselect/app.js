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
                        <option>Cafe Bombon</option>
                        <option>Caffe Corretto</option>
                        <option>Cafe Crema</option>
                        <option>Caffe Latte</option>
                        <option>Caffe macchiato</option>
                        <option>Cafe melange</option>
                        <option>Coffee milk</option>
                        <option>Cafe mocha</option>
                        <option>Cappuccino</option>
                        <option>Carajillo</option>
                        <option>Cuban espresso</option>
                        <option>Espresso</option>
                        <option selected='true'>The Flat White</option>
                        <option>Frappuccino</option>
                        <option>Galao</option>
                        <option>Greek frappe coffee</option>
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
