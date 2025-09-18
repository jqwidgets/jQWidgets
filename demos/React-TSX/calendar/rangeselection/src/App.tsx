import * as React from 'react';
import JqxCalendar, { ICalendarProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcalendar';

function App() {
    const [value, setValue] = React.useState<Date>(new Date(2016, 7, 7));
    const myCalendar = React.useRef<JqxCalendar>(null);
    const log = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const date1 = new Date();
        date1.setFullYear(2016, 7, 7);
        const date2 = new Date();
        date2.setFullYear(2016, 7, 15);
        myCalendar.current?.setRange(date1, date2);
    }, []);

    const calendarOnChange = React.useCallback((event: any) => {
        const selection = event.args.range;
        if (log.current) {
            log.current.innerHTML = '<div>From: ' + selection.from.toLocaleDateString() + ' <br/>To: ' + selection.to.toLocaleDateString() + '</div>';
        }
    }, []);

    return (
        <div>
            <JqxCalendar
                theme="material-purple"
                ref={myCalendar}
                onChange={calendarOnChange}
                width={220}
                height={220}
                selectionMode="range"
                value={value}
            />
            <div ref={log} />
        </div>
    );
}

export default App;