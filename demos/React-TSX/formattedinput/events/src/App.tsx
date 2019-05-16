import * as React from 'react';
 


import JqxFormattedInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxformattedinput';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';

class App extends React.PureComponent<{}> {

    private myPanel = React.createRef<JqxPanel>();

    constructor(props: {}) {
        super(props);
        this.onOpen = this.onOpen.bind(this);
        this.onClose = this.onClose.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onRadixChange = this.onRadixChange.bind(this);
    }

    public render() {
        return (
            <div>
                <JqxFormattedInput
                    onOpen={this.onOpen} onClose={this.onClose}
                    onChange={this.onChange} onRadixChange={this.onRadixChange}
                    width={300} height={25} radix={'decimal'}
                    value={190} spinButtons={true} dropDown={true} />
                <div style={{ marginTop: '150px' }}>
                    Events log:
                </div>
                <JqxPanel theme={'material-purple'} ref={this.myPanel} width={300} height={150} />
            </div>
        );
    }

    private onOpen(event: any): void {
        this.myPanel.current!.append('<strong>' + event.type + '</strong><br />');
    };

    private onClose(event: any): void {
        this.myPanel.current!.append('<strong>' + event.type + '</strong><br />');
    };

    private onChange(event: any): void {
        const args = event.args;
        const newValue = args.value;
        const oldValue = args.oldValue;
        const radix = args.radix;
        this.myPanel.current!.append('<strong>' + event.type + '</strong><br />' +
            'value: ' + newValue + ', old value: ' + oldValue + ', radix: ' + radix + '<br />');
    };

    private onRadixChange(event: any): void {
        const args = event.args;
        const newRadix = args.radix;
        const oldRadix = args.oldRadix;
        const newValue = args.value;
        const oldValue = args.oldValue;
        this.myPanel.current!.append('<strong>' + event.type + '</strong><br />' +
            'radix: ' + newRadix + ', old radix: ' + oldRadix +
            '<br />value: ' + newValue + ', old value: ' + oldValue + '<br />');
    };
}

export default App;