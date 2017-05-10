import React from 'react';
import ReactDOM from 'react-dom';

import JqxNotification from '../../../jqwidgets-react/react_jqxnotification.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';
import JqxPanel from '../../../jqwidgets-react/react_jqxpanel.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.checkMail.on('click', () => {
            this.refs.jqxNotification.open();
        });

        this.refs.jqxNotification.on('open', (event) => {
            this.refs.eventsPanel.append(event.type + '<br />');
        });

        this.refs.jqxNotification.on('close', (event) => {
            this.refs.eventsPanel.append(event.type + '<br />');
        });

        this.refs.jqxNotification.on('click', () => {
            this.refs.eventsPanel.append(event.type + '<br />');
            document.getElementById('messagePanel').style.display = 'inline-block';
        });
    }
    render() {
        return (
            <div>
                <JqxNotification ref='jqxNotification'
                    width={'auto'}
                    position={'top-right'}
                    opacity={0.9}
                    closeOnClick={true}
                    autoClose={false}
                    showCloseButton={true}
                    template={'mail'}
                    blink={true}
                >
                    <div>You have <b>2</b> new messages.</div>
                    <div style={{ fontSize: 'smaller', textAlign: 'center' }}>Click to view.</div>
                </JqxNotification>

                <JqxButton ref='checkMail' value='Check mail' style={{ marginTop: '20px', position: 'relative' }} />

                <div style={{ marginTop: 15 }}>
                    Events log:</div>
                <JqxPanel ref='eventsPanel'
                    width={150} height={150}
                />

                <div id='messagePanel' style={{ width: 400, display: 'none' }}>
                    <p>
                        <b>From:</b> Ken</p>
                    <p>
                        <b>About</b>: Appointment</p>
                    <p>
                        Hi,<br />
                        I just wanted to remind you dinner is at 8pm tonight at Carl's.</p>
                    <hr style={{ width: 300, textAlign: 'right' }} />
                    <p>
                        <b>From:</b> Sue</p>
                    <p>
                        <b>About</b>: Shopping</p>
                    <p>
                        Here's the shopping list for tommorow's party:</p>
                    <ul>
                        <li>Wine</li>
                        <li>Tomatoes</li>
                        <li>Cheese</li>
                        <li>Popcorn</li></ul>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
