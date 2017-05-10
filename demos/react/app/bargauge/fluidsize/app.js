import React from 'react';
import ReactDOM from 'react-dom';

import JqxBarGauge from '../../../jqwidgets-react/react_jqxbargauge.js';

class App extends React.Component {
    render() {
        return (
            <JqxBarGauge
                width={'75%'} height={'75%'}
                colorScheme={'scheme11'} values={[32, 11, 100, 49, 69, 20]}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
