import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxNotification from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnotification';

class App extends React.PureComponent<{}> {

    private msgNotification = React.createRef<JqxNotification>();
    private timeNotification = React.createRef<JqxNotification>();

    constructor(props: {}) {
        super(props);
        this.onClickOpenMessageNotification = this.onClickOpenMessageNotification.bind(this);
        this.onClickOpenTimeNotification = this.onClickOpenTimeNotification.bind(this);
    }

    public render() {
        return (
            <div>
                <JqxNotification theme={'material-purple'} ref={this.msgNotification}
                    width={250} position={'top-right'} opacity={0.9} autoOpen={false}
                    autoClose={true} animationOpenDelay={800} autoCloseDelay={3000} template={'info'}>
                    <div>
                        Welcome to our website.
                    </div>
                </JqxNotification>
                <JqxNotification theme={'material-purple'} ref={this.timeNotification}
                    width={250} position={'top-right'} opacity={0.9} autoOpen={false}
                    autoClose={true} animationOpenDelay={800} autoCloseDelay={3000} template={'time'}>
                    <div>Current time: <span id="currentTime" style={{ fontWeight: 'bold' }} />.</div>
                </JqxNotification >

                <JqxButton theme={'material-purple'} width={230} height={20} onClick={this.onClickOpenMessageNotification}>
                    Open a message notification
                </JqxButton>
                <br /> <br />
                <JqxButton theme={'material-purple'} width={230} height={20} onClick={this.onClickOpenTimeNotification} >
                    Open a current time notification
                </JqxButton>
            </div>
        );
    }

    private onClickOpenMessageNotification(): void {
        this.msgNotification.current!.open();
    }

    private onClickOpenTimeNotification(): void {
        const date = new Date();
        const minutes = date.getMinutes();
        let minutesString: string = '';
        if (minutes < 10) {
            minutesString = "0" + minutes;
        } else {
            minutesString = "" + minutes;
        }

        const seconds = date.getSeconds();
        let secondsString: string = '';
        if (seconds < 10) {
            secondsString = "0" + seconds;
        } else {
            secondsString = "" + seconds;
        }

        const timeSpan = document.getElementById('currentTime');
        timeSpan!.innerText = date.getHours() + ":" + minutesString + ":" + secondsString;
        this.timeNotification.current!.open();
    }
}

export default App;