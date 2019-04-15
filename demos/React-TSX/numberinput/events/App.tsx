import * as React from 'react';
 


import JqxNumberInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnumberinput';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';

class App extends React.PureComponent<{}> {

    private events = React.createRef<JqxPanel>();

    constructor(props: {}) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onTextChanged = this.onTextChanged.bind(this);
    }

    public render() {
        return (
            <div style={{ float: 'left' }}>
                <div style={{ marginTop: '10px' }}>
                    Number
                </div>
                <div style={{ marginTop: '3px' }}>
                    <JqxNumberInput theme={'material-purple'} onChange={this.onChange} onTextchanged={this.onTextChanged}
                        width={250} height={25} spinButtons={true} />
                </div>
                <div style={{ marginLeft: '0px', marginTop: '20px', float: 'left' }}>
                    <div>
                        <span>
                            Events:
                        </span>
                        <JqxPanel theme={'material-purple'} ref={this.events} style={{ border: 'none' }} width={300} height={250} />
                    </div>
                </div>
            </div>
        );
    }

    private onChange(event: any): void {
        const value = event.args.value;
        this.events.current!.clearcontent();
        this.events.current!.prepend('<div style="margin-top: 5px;">Value: ' + value + '</div>');
    };

    private onTextChanged(event: any): void {
        const text = event.args.text;
        this.events.current!.prepend('<div style="margin-top: 5px;">Text: ' + text + '</div>');
    };
}

export default App;