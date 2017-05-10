import React from 'react';
import ReactDOM from 'react-dom';

import JqxNotification from '../../../jqwidgets-react/react_jqxnotification.js';

class App extends React.Component {
    render () {
        return (
            <JqxNotification ref='jqxNotification' style={{ marginTop: 40 }}
                width={'auto'} 
                position={'top-left'}
                opacity={0.9}  
                autoOpen={true}
                animationOpenDelay={800}
                autoClose={false}
                template={'info'}
                rtl={true}
                >
                אין לך הודעות.
            </JqxNotification>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
