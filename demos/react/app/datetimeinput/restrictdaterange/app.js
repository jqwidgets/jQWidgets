import React from 'react';
import ReactDOM from 'react-dom';

import JqxDateTimeInput from '../../../jqwidgets-react/react_jqxdatetimeinput.js';

class App extends React.Component {
    render() {
        return (
            <div style={{ float: 'left' }}>
                <div style={{ textAlign: 'center', width: 250, fontFamily: 'Verdana', fontSize: 13 }}>
                    The navigation is restricted from 01/01/2010 to 01/01/2015
                </div>
                <br />
                <JqxDateTimeInput
                    width={250} height={25}
                    min={new Date(2010, 0, 1)} max={new Date(2014, 11, 31)}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
