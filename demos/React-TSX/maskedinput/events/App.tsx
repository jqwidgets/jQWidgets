import * as React from 'react';
 


import JqxMaskedInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxmaskedinput';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';

class App extends React.PureComponent<{}> {

    private events = React.createRef<JqxPanel>();

    constructor(props: {}) {
        super(props);
        this.change = this.change.bind(this);
    }

    public render() {
        return (
            <div>
                <div style={{ fontSize: '13px', fontFamily: 'Verdana', marginTop: '10px' }}>
                    Phone Number
                </div>
                <JqxMaskedInput theme={'material-purple'} style={{ marginTop: '3px' }} onChange={this.change}
                    width={250} height={25} mask={'(###)###-####'} />

                <div style={{ marginLeft: '0px', marginTop: '20px' }}>
                    <div>
                        <span>Events:</span>
                        <JqxPanel theme={'material-purple'} ref={this.events} style={{ border: 'none' }} width={300} height={250} />
                    </div>
                </div>
            </div>
        );
    }

    private change(event: any): void {
        const eventType = event.type;
        const eventValue = event.args.value;
        this.events.current!.prepend('<div style="margin-top: 5px;">type: ' + eventType + '; value: ' + eventValue + '</div>');
    };
}

export default App;