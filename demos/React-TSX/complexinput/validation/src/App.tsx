import * as React from 'react';
import { useState } from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxComplexInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcomplexinput';

function App() {
    const [value, setValue] = useState('15 + 7.2i');

    const btnOnClick = () => {
        setValue('11- 2ii');
    };

    return (
        <div>
            <JqxComplexInput
                theme="material-purple"
                width={250}
                height={25}
                value={value}
                spinButtons={true}
            />
            <br />
            <div style={{ marginTop: '20px' }} />

            <JqxButton
                theme="material-purple"
                onClick={btnOnClick}
                width={200}
            >
                Set wrong value: "11- 2ii"
            </JqxButton>
        </div>
    );
}

export default App;