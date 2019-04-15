import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxNotification from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnotification';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';

class App extends React.PureComponent<{}> {

    private myNotification = React.createRef<JqxNotification>();
    private eventsPanel = React.createRef<JqxPanel>();
    private messagePanel = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
        this.onOpen = this.onOpen.bind(this);
        this.onClose = this.onClose.bind(this);
        this.onClick = this.onClick.bind(this);
        this.clickCheckMail = this.clickCheckMail.bind(this);
        this.writeEventType = this.writeEventType.bind(this);
    }

    public render() {
        return (
            <div>
                <JqxNotification theme={'material-purple'} ref={this.myNotification}
                    onOpen={this.onOpen} onClose={this.onClose} onClick={this.onClick}
                    width={'auto'} blink={true} closeOnClick={true} autoClose={false} template={'mail'}
                    opacity={0.9} position={'top-right'}>
                    <div>
                        You have <b>2</b> new messages.
                    </div>
                    <div style={{ fontSize: 'smaller', textAlign: 'center' }}>
                        Click to view.
                    </div>
                </JqxNotification>
                <JqxButton theme={'material-purple'} onClick={this.clickCheckMail} width={80}>
                    Check mail
                </JqxButton>
                <div style={{ marginTop: '15px' }}>
                    Events log:
                </div>
                <JqxPanel theme={'material-purple'} ref={this.eventsPanel} width={150} height={150} />
                <div ref={this.messagePanel} style={{ width: '400px', display: 'none' }}>
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

    private onOpen(event: any): void {
        this.writeEventType(event);
    };

    private onClose(event: any): void {
        this.writeEventType(event);
    };

    private onClick(event: any): void {
        this.writeEventType(event);
        this.messagePanel.current!.style.display = 'inline-block';
    };

    private clickCheckMail(): void {
        this.myNotification.current!.open();
    };

    private writeEventType(event: any): void {
        this.eventsPanel.current!.append(event.type + "<br />");
    };
}

export default App;