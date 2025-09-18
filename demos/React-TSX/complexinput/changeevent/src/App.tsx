import * as React from 'react';
import { useRef, useCallback } from 'react';
import JqxComplexInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcomplexinput';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';

function App() {
    const myPanel = useRef<JqxPanel>(null);

    const complexInputOnChange = useCallback((event: any) => {
        const args = event.args;
        if (args) {
            const value = args.value;
            const oldValue = args.oldValue;
            const realPart = args.realPart;
            const imaginaryPart = args.imaginaryPart;
            myPanel.current!.append('<strong>' + event.type + '</strong><br />' +
                'value: ' + value + ', old value: ' + oldValue +
                ',<br /> real part: ' + realPart + ', imaginary part: ' + imaginaryPart + '<br />');
        }
    }, []);

    return (
        <div>
            <JqxComplexInput
                theme="material-purple"
                onChange={complexInputOnChange}
                width={300}
                height={25}
                value="15 + 7i"
                spinButtons={true}
            />
            <div style={{ marginTop: '20px' }}>Events log:</div>
            <JqxPanel
                theme="material-purple"
                ref={myPanel}
                width={300}
                height={150}
            />
        </div>
    );
}

export default App;