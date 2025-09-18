import * as React from 'react';
import JqxFormattedInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxformattedinput';

function App() {
    return (
        <JqxFormattedInput width={'30%'} height={25} radix={'binary'} spinButtons={true} value={10111} />
    );
}

export default App;