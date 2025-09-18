import * as React from 'react';
import { useRef } from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxNotification from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnotification';

function App() {
    const msgNotification = useRef<JqxNotification>(null);
    const timeNotification = useRef<JqxNotification>(null);

    const onClickOpenMessageNotification = () => {
        msgNotification.current!.open();
    };

    const onClickOpenTimeNotification = () => {
        const date = new Date();
        const minutes = date.getMinutes();
        const minutesString = minutes < 10 ? '0' + minutes : '' + minutes;
        const seconds = date.getSeconds();
        const secondsString = seconds < 10 ? '0' + seconds : '' + seconds;
        const timeSpan = document.getElementById('currentTime');
        if (timeSpan) {
            timeSpan.innerText = date.getHours() + ':' + minutesString + ':' + secondsString;
        }
        timeNotification.current!.open();
    };

    return (
        <div>
            <JqxNotification
                theme="material-purple"
                ref={msgNotification}
                width={250}
                position="top-right"
                opacity={0.9}
                autoOpen={false}
                autoClose={true}
                animationOpenDelay={800}
                autoCloseDelay={3000}
                template="info"
            >
                <div>
                    Welcome to our website.
                </div>
            </JqxNotification>
            <JqxNotification
                theme="material-purple"
                ref={timeNotification}
                width={250}
                position="top-right"
                opacity={0.9}
                autoOpen={false}
                autoClose={true}
                animationOpenDelay={800}
                autoCloseDelay={3000}
                template="time"
            >
                <div>
                    Current time: <span id="currentTime" style={{ fontWeight: 'bold' }} />.
                </div>
            </JqxNotification>
            <JqxButton
                theme="material-purple"
                width={230}
                height={20}
                onClick={onClickOpenMessageNotification}
            >
                Open a message notification
            </JqxButton>
            <br />
            <br />
            <JqxButton
                theme="material-purple"
                width={230}
                height={20}
                onClick={onClickOpenTimeNotification}
            >
                Open a current time notification
            </JqxButton>
        </div>
    );
}

export default App;