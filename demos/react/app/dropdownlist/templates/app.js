import React from 'react';
import ReactDOM from 'react-dom';

import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';

class App extends React.Component {
    render() {
        let source = [
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
                <JqxDropDownList
                    width={200} height={30} source={source}
                    selectedIndex={1} template={'primary'}
                />
                <br />
                <JqxDropDownList
                    width={200} height={30} source={source}
                    selectedIndex={1} template={'success'}
                />
                <br />
                <JqxDropDownList
                    width={200} height={30} source={source}
                    selectedIndex={1} template={'info'}
                />
                <br />
                <JqxDropDownList
                    width={200} height={30} source={source}
                    selectedIndex={1} template={'warning'}
                />
                <br />
                <JqxDropDownList
                    width={200} height={30} source={source}
                    selectedIndex={1} template={'danger'}
                />
                <br />
                <JqxDropDownList
                    width={200} height={30} source={source}
                    selectedIndex={1}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
