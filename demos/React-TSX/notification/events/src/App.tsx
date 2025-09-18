import * as React from 'react';
import { useRef } from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxNotification from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnotification';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';

function App() {
    const myNotification = useRef<JqxNotification>(null);
    const eventsPanel = useRef<JqxPanel>(null);
    const messagePanel = useRef<HTMLDivElement>(null);

    const writeEventType = (event: any) => {
        eventsPanel.current?.append(event.type + "<br />");
    };

    const onOpen = (event: any) => {
        writeEventType(event);
    };

    const onClose = (event: any) => {
        writeEventType(event);
    };

    const onClick = (event: any) => {
        writeEventType(event);
        if (messagePanel.current) {
            messagePanel.current.style.display = 'inline-block';
        }
    };

    const clickCheckMail = () => {
        myNotification.current?.open();
    };

    return (
        <div>
            <JqxNotification
                theme="material-purple"
                ref={myNotification}
                onOpen={onOpen}
                onClose={onClose}
                onClick={onClick}
                width="auto"
                blink={true}
                closeOnClick={true}
                autoClose={false}
                template="mail"
                opacity={0.9}
                position="top-right"
            >
                <div>
                    You have <b>2</b> new messages.
                </div>
                <div style={{ fontSize: 'smaller', textAlign: 'center' }}>
                    Click to view.
                </div>
            </JqxNotification>
            <JqxButton theme="material-purple" onClick={clickCheckMail} width={80}>
                Check mail
            </JqxButton>
            <div style={{ marginTop: '15px' }}>
                Events log:
            </div>
            <JqxPanel theme="material-purple" ref={eventsPanel} width={150} height={150} />
            <div ref={messagePanel} style={{ width: '400px', display: 'none' }}>
                <p>
                    <b>From:</b> Ken
                </p>
                <p>
                    <b>About</b>: Appointment
                </p>
                <p>
                    Hi,<br />
                    I just wanted to remind you dinner is at 8pm tonight at Carl's.
                </p>
                <hr style={{ width: '300px', textAlign: 'right' }} />
                <p>
                    <b>From:</b> Sue
                </p>
                <p>
                    <b>About</b>: Shopping
                </p>
                <p>
                    Here's the shopping list for tommorow's party:
                </p>
                <ul>
                    <li>Wine</li>
                    <li>Tomatoes</li>
                    <li>Cheese</li>
                    <li>Popcorn</li>
                </ul>
            </div>
        </div>
    );
}

export default App;