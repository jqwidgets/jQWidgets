import * as React from 'react';
import './App.css';
import JqxCalendar from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcalendar';

function App(): JSX.Element {
    return (
        <div style={{ minWidth: '200px', minHeight: '200px', width: '30%', height: '30%' }}>
            <JqxCalendar theme="material-purple" width="100%" height="100%" />
        </div>
    );
}

export default App;