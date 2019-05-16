import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxFormattedInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxformattedinput';

class App extends React.PureComponent<{}> {

    private myFormattedInput = React.createRef<JqxFormattedInput>();

    constructor(props: {}) {
        super(props);
        this.getDecimal = this.getDecimal.bind(this);
        this.getExponential = this.getExponential.bind(this);
        this.getScientific = this.getScientific.bind(this);
        this.getEngineering = this.getEngineering.bind(this);
    }

    public render() {
        return (
            <div>
                <JqxFormattedInput ref={this.myFormattedInput}
                    width={200} height={25} radix={'decimal'} spinButtons={true} 
                    value={330000} decimalNotation={'exponential'} />

                <div style={{ marginTop: '20px' }}>
                    <JqxButton theme={'material-purple'} style={{ float: 'left' }} onClick={this.getDecimal} width={185}> Get Decimal Value</JqxButton>
                    <JqxButton theme={'material-purple'} style={{ marginLeft: '5px', float: 'left' }} onClick={this.getExponential} width={185}>Get Exponential Notation</JqxButton>
                    <br />
                    <br />
                    <JqxButton theme={'material-purple'} style={{ float: 'left' }} onClick={this.getScientific} width={185}> Get Scientific Notation</JqxButton>
                    <JqxButton theme={'material-purple'} style={{ marginLeft: '5px', float: 'left' }} onClick={this.getEngineering} width={185}>Get Engineering Notation</JqxButton>
                </div>
            </div>
        );
    }

    private getDecimal(): void {
        const decimalValue = this.myFormattedInput.current!.val('decimal');
        alert('Decimal Value: ' + decimalValue);
    };

    private getExponential(): void {
        const exponentialValue = this.myFormattedInput.current!.val('exponential');
        alert('Exponential Notation: ' + exponentialValue);
    };

    private getScientific(): void {
        const scientificValue = this.myFormattedInput.current!.val('scientific');
        alert('Scientific Notation: ' + scientificValue);
    };

    private getEngineering(): void {
        const engineeringValue = this.myFormattedInput.current!.val('engineering');
        alert('Engineering Notation: ' + engineeringValue);
    };
}

export default App;