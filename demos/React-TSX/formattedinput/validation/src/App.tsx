import * as React from 'react';
import JqxFormattedInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxformattedinput';

function App() {
    return (
        <JqxFormattedInput
            width={250}
            height={25}
            radix="decimal"
            value={0}
            min={0}
            max={1000}
            spinButtons={true}
        />
    );
}

export default App;