import * as React from 'react';
 

import JqxCalendar from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcalendar';

class App extends React.PureComponent<{}> {
    private myCalendar = React.createRef<JqxCalendar>();

    constructor(props: {}) {
        super(props);
    };

    public componentDidMount() {
        const date1 = new Date();
        const date2 = new Date();
        const date3 = new Date();
        date1.setDate(5);
        date2.setDate(15);
        date3.setDate(16);
        // Add special dates by invoking the addSpecialDate method.
        this.myCalendar.current!.addSpecialDate(date1, '', 'Special Date1');
        this.myCalendar.current!.addSpecialDate(date2, '', 'Special Date2');
        this.myCalendar.current!.addSpecialDate(date3, '', 'Special Date3');
    }

    public render() {
        return (
            <JqxCalendar theme={'material-purple'} ref={this.myCalendar}
                width={220} height={220} enableTooltips={true}/>
        );
    }
}

export default App; 