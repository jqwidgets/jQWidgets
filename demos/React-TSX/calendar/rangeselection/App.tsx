import * as React from 'react';
 

import JqxCalendar, { ICalendarProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcalendar';

class App extends React.PureComponent<{}, ICalendarProps> {
    private myCalendar = React.createRef<JqxCalendar>();
    private log = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
        this.calendarOnChange = this.calendarOnChange.bind(this);

        this.state = {
            value: new Date(2016, 7, 7)
        }
    };

    public componentDidMount() {
        const date1 = new Date();
        date1.setFullYear(2016, 7, 7);
        const date2 = new Date();
        date2.setFullYear(2016, 7, 15);
        this.myCalendar.current!.setRange(date1, date2);
    }

    public render() {
        return (
            <div>
                <JqxCalendar theme={'material-purple'} ref={this.myCalendar} onChange={this.calendarOnChange}
                    width={220} height={220} selectionMode={'range'} value={this.state.value} />
                <div ref={this.log} />
            </div>
        );
    }

    private calendarOnChange(event: any): void {
        const selection = event.args.range;
        this.log.current!.innerHTML = '<div>From: ' + selection.from.toLocaleDateString() + ' <br/>To: ' + selection.to.toLocaleDateString() + '</div>';
    }
}

export default App; 