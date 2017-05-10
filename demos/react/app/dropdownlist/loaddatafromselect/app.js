import React from 'react';
import ReactDOM from 'react-dom';

import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';

class App extends React.Component {
    componentDidMount() {
        let updating = false;
        let select = document.getElementById('select');

        this.refs.myDropDownList.loadFromSelect('select');

        this.refs.myDropDownList.on('select', (event) => {        
            if (event.args && !updating) {
                let index = event.args.item.index;
                select.selectedIndex = index;
            }
        });

        select.addEventListener('change', (event) => {
            updating = true;
            let index = select.selectedIndex;
            this.refs.myDropDownList.selectIndex(index);
            this.refs.myDropDownList.ensureVisible(index);
            updating = false;
        },true);
    }
    render() {
        return (
            <div style={{ float: 'left', width: 500 }}>
                <JqxDropDownList ref='myDropDownList' style={{ float: 'left' }}
                    width={200} height={25} selectedIndex={0}
                />
                <div style={{ float: 'left' }}>
                    <select style={{ height: 25, width: 200, marginLeft: 30 }} id='select'>
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
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
