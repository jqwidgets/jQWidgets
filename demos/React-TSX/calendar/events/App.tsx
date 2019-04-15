import * as React from 'react';
 


import './App.css';

import JqxCalendar from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcalendar';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';

class App extends React.PureComponent<{}> {
    private myCalendar = React.createRef<JqxCalendar>();
    private myPanel = React.createRef<JqxPanel>();

    constructor(props: {}) {
        super(props);
        this.calendarEvent = this.calendarEvent.bind(this);
    };

    public render() { 
        return (
            <div style={{ float: 'left' }}>
                <JqxCalendar theme={'material-purple'} ref={this.myCalendar} style={{ marginTop: '3px' }} onChange={this.calendarEvent}
                    onViewChange={this.calendarEvent} width={220} height={220} />
                <div style={{ marginLeft: 0, marginTop: '20px', float: 'left' }}>
                    <span>Events:</span>
                    <JqxPanel theme={'material-purple'} ref={this.myPanel} width={600} height={250} />
                </div>
            </div>
        );
    }

    private calendarEvent(event: any): void {
        const date = event.args.date;
        const view = event.args.view;
        const viewFrom = view.from;
        const viewTo = view.to;
        this.myPanel.current!.clearcontent();
        if (event.type === 'viewChange') {
            this.myPanel.current!.prepend('<div style="margin-top: 5px;">Event Type: viewChange<br/>Date: ' + date + '<br/>View: ' + viewFrom + ' - ' + viewTo + '</div>');
        }
        else {
            this.myPanel.current!.prepend('<div style="margin-top: 5px;">Event Type: change<br/>Date: ' + date + '</div>');
        }
    }
}

export default App;