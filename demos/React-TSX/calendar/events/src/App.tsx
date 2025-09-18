import * as React from 'react';
import './App.css';
import JqxCalendar from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcalendar';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';

const App = () => {
    const myCalendar = React.useRef<JqxCalendar>(null);
    const myPanel = React.useRef<JqxPanel>(null);

    const calendarEvent = React.useCallback((event: any) => {
        const date = event.args.date;
        const view = event.args.view;
        const viewFrom = view?.from;
        const viewTo = view?.to;
        myPanel.current?.clearcontent();
        if (event.type === 'viewChange') {
            myPanel.current?.prepend('<div style="margin-top: 5px;">Event Type: viewChange<br/>Date: ' + date + '<br/>View: ' + viewFrom + ' - ' + viewTo + '</div>');
        } else {
            myPanel.current?.prepend('<div style="margin-top: 5px;">Event Type: change<br/>Date: ' + date + '</div>');
        }
    }, []);

    return (
        <div style={{ float: 'left' }}>
            <JqxCalendar
                theme={'material-purple'}
                ref={myCalendar}
                style={{ marginTop: '3px' }}
                onChange={calendarEvent}
                onViewChange={calendarEvent}
                width={220}
                height={220}
            />
            <div style={{ marginLeft: 0, marginTop: '20px', float: 'left' }}>
                <span>Events:</span>
                <JqxPanel
                    theme={'material-purple'}
                    ref={myPanel}
                    width={600}
                    height={250}
                />
            </div>
        </div>
    );
};

export default App;