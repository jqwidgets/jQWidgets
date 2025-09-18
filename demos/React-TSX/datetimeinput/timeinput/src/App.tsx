import * as React from 'react';
import JqxDateTimeInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatetimeinput';

function App() {
    return (
        <div>
            <JqxDateTimeInput
                theme="material-purple"
                width={250}
                height={30}
                formatString="T"
                showTimeButton={true}
                showCalendarButton={false}
            />
        </div>
    );
}

export default App;