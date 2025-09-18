import * as React from 'react';
import JqxDateTimeInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatetimeinput';

function App() {
    return (
        <JqxDateTimeInput theme="material-purple" width={300} height={30} formatString="F" />
    );
}

export default App;