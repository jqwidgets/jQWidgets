import React from 'react';
import ReactDOM from 'react-dom';

import JqxCalendar from '../../../jqwidgets-react/react_jqxcalendar.js';

class App extends React.Component {
    render() {
        return (
            <div style={{ minWidth: 200, minHeight: 200, width: '30%', height: '30%' }}>
                <JqxCalendar width={'100%'} height={'100%'} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
