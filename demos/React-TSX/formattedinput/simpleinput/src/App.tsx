import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxFormattedInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxformattedinput';

class App extends React.PureComponent<{}> {

    private myFormattedInput = React.createRef<JqxFormattedInput>();

    constructor(props: {}) {
        super(props);
        this.getOctal = this.getOctal.bind(this);
        this.getDecimal = this.getDecimal.bind(this);
        this.getHexadecimal = this.getHexadecimal.bind(this);
    }

    public render() {
        return (
            <div>
                <JqxFormattedInput ref={this.myFormattedInput} style={{ float: 'left' }}
                    width={250} height={25} radix={'binary'} value={100001} spinButtons={true} />

                <div style={{ marginTop: '20px' }}>
                    <JqxButton theme={'material-purple'} style={{ float: 'left' }} onClick={this.getOctal} width={175}>Get Octal Value</JqxButton>
                    <JqxButton theme={'material-purple'} style={{ marginLeft: '5px', float: 'left' }} onClick={this.getDecimal} width={175}>Get Decimal Value</JqxButton>
                    <JqxButton theme={'material-purple'} style={{ marginLeft: '5px', float: 'left' }} onClick={this.getHexadecimal} width={175}> Get Hexadecimal Value</JqxButton>
                </div>
            </div>
        );
    }

    private getOctal(): void {
        const octalValue = this.myFormattedInput.current!.val('octal');
        alert('Octal value: ' + octalValue);
    }

    private getDecimal(): void {
        const decimalValue = this.myFormattedInput.current!.val('decimal');
        alert('Decimal value: ' + decimalValue);
    }

    private getHexadecimal(): void {
        const hexadecimalValue = this.myFormattedInput.current!.val('hexadecimal');
        alert('Hexadecimal value: ' + hexadecimalValue);
    }
}

export default App;