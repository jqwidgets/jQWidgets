import React from 'react';
import ReactDOM from 'react-dom';

import JqxProgressBar from '../../../jqwidgets-react/react_jqxprogressbar.js';

class App extends React.Component {
    render() {
        return (
            <JqxProgressBar ref='horizontalProgressBar'
                rtl={true}
                width={250}
                height={30}
                value={50}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
