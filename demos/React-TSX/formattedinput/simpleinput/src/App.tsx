import * as React from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxFormattedInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxformattedinput';

const App = () => {
    const myFormattedInput = React.useRef<JqxFormattedInput>(null);

    const getOctal = () => {
        const octalValue = myFormattedInput.current!.val('octal');
        alert('Octal value: ' + octalValue);
    };

    const getDecimal = () => {
        const decimalValue = myFormattedInput.current!.val('decimal');
        alert('Decimal value: ' + decimalValue);
    };

    const getHexadecimal = () => {
        const hexadecimalValue = myFormattedInput.current!.val('hexadecimal');
        alert('Hexadecimal value: ' + hexadecimalValue);
    };

    return (
        <div>
            <JqxFormattedInput
                ref={myFormattedInput}
                style={{ float: 'left' }}
                width={250}
                height={25}
                radix={'binary'}
                value={100001}
                spinButtons={true}
            />
            <div style={{ marginTop: '20px' }}>
                <JqxButton
                    theme={'material-purple'}
                    style={{ float: 'left' }}
                    onClick={getOctal}
                    width={175}
                >
                    Get Octal Value
                </JqxButton>
                <JqxButton
                    theme={'material-purple'}
                    style={{ marginLeft: '5px', float: 'left' }}
                    onClick={getDecimal}
                    width={175}
                >
                    Get Decimal Value
                </JqxButton>
                <JqxButton
                    theme={'material-purple'}
                    style={{ marginLeft: '5px', float: 'left' }}
                    onClick={getHexadecimal}
                    width={175}
                >
                    Get Hexadecimal Value
                </JqxButton>
            </div>
        </div>
    );
};

export default App;