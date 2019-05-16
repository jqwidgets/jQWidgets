import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxMaskedInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxmaskedinput';

class App extends React.PureComponent<{}> {

    private numericInput = React.createRef<JqxMaskedInput>();
    private zipCodeInput = React.createRef<JqxMaskedInput>();
    private ssnInput = React.createRef<JqxMaskedInput>();
    private phoneInput = React.createRef<JqxMaskedInput>();
    private regexInput = React.createRef<JqxMaskedInput>();
    private disabledInput = React.createRef<JqxMaskedInput>();

    constructor(props: {}) {
        super(props);
        this.clear = this.clear.bind(this);
    }

    public render() {
        return (
            <div>
                <div style={{ fontSize: '13px', fontFamily: 'Verdana' }}>
                    <div style={{ marginTop: '10px' }}>Numeric</div>
                    <JqxMaskedInput theme={'material-purple'} ref={this.numericInput}
                        width={250} height={25} />

                    <div style={{ marginTop: '10px' }}>Zip Code</div>
                    <JqxMaskedInput theme={'material-purple'} ref={this.zipCodeInput}
                        width={250} height={25} mask={'#####-####'} />

                    <div style={{ marginTop: '10px' }}>SSN</div>
                    <JqxMaskedInput theme={'material-purple'} ref={this.ssnInput}
                        width={250} height={25} mask={'###-##-####'} />
                    <div style={{ marginTop: '10px' }}>
                        Phone Number
                    </div>
                    <JqxMaskedInput theme={'material-purple'} ref={this.phoneInput}
                        width={250} height={25} mask={'(###)###-####'} />
                    <div style={{ marginTop: '10px' }}>IP Address (ex: 255.255.255.255)</div>
                    <JqxMaskedInput theme={'material-purple'} ref={this.regexInput}
                        width={250} height={25} mask={'[0-2][0-5][0-5].[0-2][0-5][0-5].[0-2][0-5][0-5].[0-2][0-5][0-5]'} />
                    <div style={{ marginTop: '10px' }}>
                        Disabled
                    </div>
                    <JqxMaskedInput theme={'material-purple'} ref={this.disabledInput}
                        width={250} height={25} disabled={true} />
                </div>
                <br />
                <JqxButton theme={'material-purple'} onClick={this.clear} width={90}>Clear Values</JqxButton>
            </div>
        );
    }

    private clear(): void {
        this.numericInput.current!.clear();
        this.zipCodeInput.current!.clear();
        this.ssnInput.current!.clear();
        this.phoneInput.current!.clear();
        this.regexInput.current!.clear();
        this.disabledInput.current!.clear();
    }
}

export default App;