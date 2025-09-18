import * as React from 'react';
import JqxCalendar from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcalendar';

function App() {
    const min = React.useMemo(() => new Date(2010, 0, 1), []);
    const max = React.useMemo(() => new Date(2020, 11, 31), []);

    return (
        <div>
            <div>The navigation is restricted from 01/01/2010 to 01/01/2021</div>
            <br />
            <JqxCalendar theme="material-purple" width={220} height={220} min={min} max={max} />
        </div>
    );
}

export default App;