import React from 'react';
import ReactDOM from 'react-dom';

import JqxFormattedInput from '../../../jqwidgets-react/react_jqxformattedinput.js';
import JqxPanel from '../../../jqwidgets-react/react_jqxpanel.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myFormattedInput.on('open', (event) => {
            this.refs.myPanel.append('<strong>' + event.type + '</strong><br />');
        });
        this.refs.myFormattedInput.on('close', (event) => {
            this.refs.myPanel.append('<strong>' + event.type + '</strong><br />');
        });
        this.refs.myFormattedInput.on('change', (event) => {
            let args = event.args;
            let newValue = args.value;
            let oldValue = args.oldValue;
            let radix = args.radix;
            this.refs.myPanel.append('<strong>' + event.type + '</strong><br />' +
                'value: ' + newValue + ', old value: ' + oldValue + ', radix: ' + radix + '<br />');
        });
        this.refs.myFormattedInput.on('radixChange', (event) => {
            let args = event.args;
            let newRadix = args.radix;
            let oldRadix = args.oldRadix;
            let newValue = args.value;
            let oldValue = args.oldValue;
            this.refs.myPanel.append('<strong>' + event.type + '</strong><br />' +
                'radix: ' + newRadix + ', old radix: ' + oldRadix +
                '<br />value: ' + newValue + ', old value: ' + oldValue + '<br />');
        });
    }
    render() {
        return (
            <div>
                <JqxFormattedInput ref='myFormattedInput'
                    width={300} height={25} radix={'decimal'}
                    value={190} spinButtons={true} dropDown={true}
                />
                <div style={{ marginTop: 150 }}>
                    Events log:
                </div>
                <JqxPanel ref='myPanel' width={300} height={150} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
