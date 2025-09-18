import * as React from 'react';
import JqxCalendar from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcalendar';

function App() {
    return (
        <JqxCalendar theme={'material-purple'} width={220} height={220} showWeekNumbers={true} rowHeaderWidth={25} />
    );
}

export default App;