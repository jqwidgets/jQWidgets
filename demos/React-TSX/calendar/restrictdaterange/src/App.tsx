import * as React from 'react';
 

import JqxCalendar, { ICalendarProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcalendar';

class App extends React.PureComponent<{}, ICalendarProps> {

    constructor(props: {}) {
        super(props);

        this.state = {
            max: new Date(2020, 11, 31),
            min: new Date(2010, 0, 1)           
        }
    };

    public render() {
        return (
            <div>
                <div>The navigation is restricted from 01/01/2010 to 01/01/2021</div>
                <br />
                <JqxCalendar theme={'material-purple'}
                    width={220} height={220} min={this.state.min} max={this.state.max} />
            </div>
        );
    }
}

export default App; 