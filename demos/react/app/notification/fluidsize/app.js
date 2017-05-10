import React from 'react';
import ReactDOM from 'react-dom';

import JqxNotification from '../../../jqwidgets-react/react_jqxnotification.js';

class App extends React.Component {
    render () {
        return (
            <JqxNotification ref='jqxNotification' style={{ marginTop: 40 }}
                width={'80%'} 
                opacity={0.9}  
                animationOpenDelay={800}
                autoClose={false}
                autoOpen={true}
                position={'top-left'}
                template={'success'}
                >
                This notification's width is 80%.
            </JqxNotification>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
