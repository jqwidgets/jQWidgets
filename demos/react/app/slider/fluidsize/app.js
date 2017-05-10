import React from 'react';
import ReactDOM from 'react-dom';

import JqxSlider from '../../../jqwidgets-react/react_jqxslider.js';

class App extends React.Component {
    render() {
        return (
            <JqxSlider ref='mySlider' style={{ margin: '50% auto' }}
                height={70} width={'80%'}
                value={5} mode={'fixed'}
                showButtons={true} tooltip={true}
                showTickLabels={true}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
