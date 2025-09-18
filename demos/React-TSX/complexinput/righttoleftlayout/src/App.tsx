import * as React from 'react';
import JqxComplexInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcomplexinput';

function App() {
    return (
        <JqxComplexInput
            theme="material-purple"
            width={250}
            height={25}
            value="15 + 7.2i"
            spinButtons={true}
            rtl={true}
        />
    );
}

export default App;