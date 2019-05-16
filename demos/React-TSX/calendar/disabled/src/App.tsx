import * as React from 'react';
 

import JqxCalendar from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcalendar';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    };

    public render() {
        return (
            <JqxCalendar theme={'material-purple'} width={220} height={220} disabled={true}/>
        );
    }
}

export default App;