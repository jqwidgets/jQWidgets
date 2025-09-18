import * as React from 'react';
import JqxFormattedInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxformattedinput';

function App() {
    return (
        <JqxFormattedInput
            width={250}
            height={25}
            radix="decimal"
            spinButtons={true}
            dropDown={true}
            value={-10}
        />
    );
}

export default App;