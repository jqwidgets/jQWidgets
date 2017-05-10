import React from 'react';
import ReactDOM from 'react-dom';

import JqxSlider from '../../../jqwidgets-react/react_jqxslider.js';

class App extends React.Component {
   render () {
        return (
            <JqxSlider ref='jqxSlider'
                tooltip={true} mode={'fixed'}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
