import React from 'react';
import ReactDOM from 'react-dom';

import JqxComplexInput from '../../../jqwidgets-react/react_jqxcomplexinput.js';
import JqxPanel from '../../../jqwidgets-react/react_jqxpanel.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myComplexInput.on('change', (event) => {
            let args = event.args;
            if (args) {
                let value = args.value;
                let oldValue = args.oldValue;
                let realPart = args.realPart;
                let imaginaryPart = args.imaginaryPart;
                this.refs.myPanel.append('<strong>' + event.type + '</strong><br />' +
                    'value: ' + value + ', old value: ' + oldValue +
                    ',<br /> real part: ' + realPart + ', imaginary part: ' + imaginaryPart + '<br />');
            }
        });
    }
    render() {
        return (
            <div>
                <JqxComplexInput ref='myComplexInput'
                    width={300} height={25} value={'15 + 7i'} spinButtons={true}
                />
                <div style={{ marginTop: 20 }}>Events log:</div>
                <JqxPanel ref='myPanel' width={300} height={150} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
