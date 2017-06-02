import React from 'react';
import ReactDOM from 'react-dom';

import JqxListBox from '../../../jqwidgets-react/react_jqxlistbox.js';

class App extends React.Component {
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
                'Cafe mocha'
            ];
        return (
            <JqxListBox
                width={200} height={250} source={source}
                allowDrop={true} allowDrag={true}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
