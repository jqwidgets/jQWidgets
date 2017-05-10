import React from 'react';
import ReactDOM from 'react-dom';

import JqxSplitter from '../../../jqwidgets-react/react_jqxsplitter.js';

class App extends React.Component {
    render() {
        return (
            <JqxSplitter ref='mainSplitter'
                width={850} height={480}
                panels={[{ size: 300 }]}
            >
                <div className="splitter-panel">
                    Panel 1</div>
                <div className="splitter-panel">
                    Panel 2</div>
            </JqxSplitter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
