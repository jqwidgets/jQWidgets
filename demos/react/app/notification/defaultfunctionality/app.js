import React from 'react';
import ReactDOM from 'react-dom';

import JqxNotification from '../../../jqwidgets-react/react_jqxnotification.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount () {
        this.refs.openMessageNotification.on('click', () => {
            this.refs.messageNotification.open();
        });
        this.refs.openTimeNotification.on('click', () => {
            let span = document.getElementById('currentTime');
            let date = new Date();
            let minutes = date.getMinutes();
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            let seconds = date.getSeconds();
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            span.innerText = date.getHours() + ":" + minutes + ":" + seconds;
            this.refs.timeNotification.open();
        });
    }
    render () {
        return (
            <div>
                <JqxNotification ref='messageNotification'
                  width={250} opacity={0.9}  autoCloseDelay={3000} animationOpenDelay={800}
                  autoClose={true} autoOpen={false} position={'top-right'} template={'info'}
                >
                  <div>Welcome to our website.</div>
                </JqxNotification>
                <JqxNotification ref='timeNotification'
                  width={250} opacity={0.9}  autoCloseDelay={3000} animationOpenDelay={800}
                  autoClose={true} autoOpen={false} position={'top-right'} template={'time'}
                >
                  <div>Current time: <span id="currentTime" style={{ fontWeight: 'bold' }}></span>.</div>
                </JqxNotification>
                <JqxButton ref='openMessageNotification'value="Open a message notification" style={{position: 'absolute'}}
                  width={230} height={30}
                />
                <JqxButton ref='openTimeNotification' value="Open a current time notification" style={{marginTop: '20px', position: 'relative'}}
                  width={230} height={30}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
