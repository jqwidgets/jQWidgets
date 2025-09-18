import React, { useRef, useCallback } from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxFormattedInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxformattedinput';

const App = () => {
    const myFormattedInput = useRef<JqxFormattedInput>(null);

    const getDecimal = useCallback(() => {
        const decimalValue = myFormattedInput.current!.val('decimal');
        alert('Decimal Value: ' + decimalValue);
    }, []);

    const getExponential = useCallback(() => {
        const exponentialValue = myFormattedInput.current!.val('exponential');
        alert('Exponential Notation: ' + exponentialValue);
    }, []);

    const getScientific = useCallback(() => {
        const scientificValue = myFormattedInput.current!.val('scientific');
        alert('Scientific Notation: ' + scientificValue);
    }, []);

    const getEngineering = useCallback(() => {
        const engineeringValue = myFormattedInput.current!.val('engineering');
        alert('Engineering Notation: ' + engineeringValue);
    }, []);

    return (
        <div>
            <JqxFormattedInput
                ref={myFormattedInput}
                width={200}
                height={25}
                radix="decimal"
                spinButtons={true}
                value={330000}
                decimalNotation="exponential"
            />

            <div style={{ marginTop: '20px' }}>
                <JqxButton
                    theme="material-purple"
                    style={{ float: 'left' }}
                    onClick={getDecimal}
                    width={185}
                >
                    Get Decimal Value
                </JqxButton>
                <JqxButton
                    theme="material-purple"
                    style={{ marginLeft: '5px', float: 'left' }}
                    onClick={getExponential}
                    width={185}
                >
                    Get Exponential Notation
                </JqxButton>
                <br />
                <br />
                <JqxButton
                    theme="material-purple"
                    style={{ float: 'left' }}
                    onClick={getScientific}
                    width={185}
                >
                    Get Scientific Notation
                </JqxButton>
                <JqxButton
                    theme="material-purple"
                    style={{ marginLeft: '5px', float: 'left' }}
                    onClick={getEngineering}
                    width={185}
                >
                    Get Engineering Notation
                </JqxButton>
            </div>
        </div>
    );
};

export default App;