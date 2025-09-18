import * as React from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxMaskedInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxmaskedinput';

const App = () => {
    const numericInput = React.useRef<JqxMaskedInput>(null);
    const zipCodeInput = React.useRef<JqxMaskedInput>(null);
    const ssnInput = React.useRef<JqxMaskedInput>(null);
    const phoneInput = React.useRef<JqxMaskedInput>(null);
    const regexInput = React.useRef<JqxMaskedInput>(null);
    const disabledInput = React.useRef<JqxMaskedInput>(null);

    const clear = () => {
        numericInput.current?.clear();
        zipCodeInput.current?.clear();
        ssnInput.current?.clear();
        phoneInput.current?.clear();
        regexInput.current?.clear();
        disabledInput.current?.clear();
    };

    return (
        <div>
            <div style={{ fontSize: '13px', fontFamily: 'Verdana' }}>
                <div style={{ marginTop: '10px' }}>Numeric</div>
                <JqxMaskedInput theme={'material-purple'} ref={numericInput} width={250} height={25} />

                <div style={{ marginTop: '10px' }}>Zip Code</div>
                <JqxMaskedInput theme={'material-purple'} ref={zipCodeInput} width={250} height={25} mask={'#####-####'} />

                <div style={{ marginTop: '10px' }}>SSN</div>
                <JqxMaskedInput theme={'material-purple'} ref={ssnInput} width={250} height={25} mask={'###-##-####'} />

                <div style={{ marginTop: '10px' }}>Phone Number</div>
                <JqxMaskedInput theme={'material-purple'} ref={phoneInput} width={250} height={25} mask={'(###)###-####'} />

                <div style={{ marginTop: '10px' }}>IP Address (ex: 255.255.255.255)</div>
                <JqxMaskedInput theme={'material-purple'} ref={regexInput} width={250} height={25} mask={'[0-2][0-5][0-5].[0-2][0-5][0-5].[0-2][0-5][0-5].[0-2][0-5][0-5]'} />

                <div style={{ marginTop: '10px' }}>Disabled</div>
                <JqxMaskedInput theme={'material-purple'} ref={disabledInput} width={250} height={25} disabled={true} />
            </div>
            <br />
            <JqxButton theme={'material-purple'} onClick={clear} width={90}>Clear Values</JqxButton>
        </div>
    );
};

export default App;