import React from 'react';
import ReactDOM from 'react-dom';

import JqxEditor from '../../../jqwidgets-react/react_jqxeditor.js';

class App extends React.Component {
    render() {
        return (
            <JqxEditor width={800} height={400} lineBreak={'div'} />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
