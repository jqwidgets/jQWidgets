import * as React from 'react';
 

import JqxCalendar, { ICalendarProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcalendar';

class App extends React.PureComponent<{}, ICalendarProps> {

    constructor(props: {}) {
        super(props);

        this.state = {
            restrictedDates: []
        }
    };

    public componentWillMount() {
        const date = new Date();
        date.setHours(0, 0, 0);
        date.setDate(2);
        const date2 = new Date();
        date2.setHours(0, 0, 0);
        date2.setDate(3);
        const dates = [date, date2];
        this.setState({
            restrictedDates: dates
        });
    }

    public render() {
        return (
            <JqxCalendar theme={'material-purple'} width={220} height={220} restrictedDates={this.state.restrictedDates} />
        );
    }
}

export default App; 