import React from 'react';
import ReactDOM from 'react-dom';

import JqxListBox from '../../../jqwidgets-react/react_jqxlistbox.js';

class App extends React.Component {
    render () {
        let source = [
           "Affogato",
           "Americano",
           "Bicerin",
           "Breve",
           "Café Bombón",
           "Café au lait",
           "Caffé Corretto",
           "Café Crema",
           "Caffé Latte",
           "Caffé macchiato"
        ];
        return (
            <JqxListBox
              width={200} height={200}
              source={source} selectedIndex={3}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
