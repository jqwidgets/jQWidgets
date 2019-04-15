import * as React from 'react';
 


import JqxComplexInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcomplexinput';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';

class App extends React.PureComponent<{}> {

    private myPanel = React.createRef<JqxPanel>();

    constructor(props: {}) {
        super(props);
        this.complexInputOnChange = this.complexInputOnChange.bind(this);
    }

    public render() {
        return (
            <div>
                <JqxComplexInput theme={'material-purple'} onChange={this.complexInputOnChange}
                    width={300} height={25} value={'15 + 7i'} spinButtons={true} />

                <div style={{ marginTop: '20px' }}>Events log:</div>

                <JqxPanel theme={'material-purple'} ref={this.myPanel}
                    width={300} height={150} />
            </div>
        );
    }

    private complexInputOnChange(event: any): void {
        const args = event.args;
        if (args) {
            const value = args.value;
            const oldValue = args.oldValue;
            const realPart = args.realPart;
            const imaginaryPart = args.imaginaryPart;
            this.myPanel.current!.append('<strong>' + event.type + '</strong><br />' +
                'value: ' + value + ', old value: ' + oldValue +
                ',<br /> real part: ' + realPart + ', imaginary part: ' + imaginaryPart + '<br />');
        }
    }
}

export default App;