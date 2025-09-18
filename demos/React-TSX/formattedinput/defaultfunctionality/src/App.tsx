import * as React from 'react';
import JqxFormattedInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxformattedinput';

function App() {
    return (
        <JqxFormattedInput
            width={250}
            height={25}
            radix="decimal"
            value={15}
            spinButtons={true}
            dropDown={true}
        />
    );
}

export default App;