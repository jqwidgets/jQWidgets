import * as React from 'react';
import JqxMaskedInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxmaskedinput';

function App() {
    return (
        <div>
            <div style={{ fontSize: '13px', fontFamily: 'Verdana', marginTop: '10px' }}>
                Phone Number
            </div>
            <JqxMaskedInput theme={'material-purple'} style={{ marginTop: '3px' }}
                width={'50%'} height={35} mask={'(###)###-####'} />
        </div>
    );
}

export default App;