import React from 'react';
import ReactDOM from 'react-dom';

import JqxFormattedInput from '../../../jqwidgets-react/react_jqxformattedinput.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.getOctal.on('click', () => {
            let octalValue = this.refs.myFormattedInput.val('octal');
            alert('Octal value: ' + octalValue);
        });
        this.refs.getDecimal.on('click', () => {
            let decimalValue = this.refs.myFormattedInput.val('decimal');
            alert('Decimal value: ' + decimalValue);
        });
        this.refs.getHexadecimal.on('click', () => {
            let hexadecimalValue = this.refs.myFormattedInput.val('hexadecimal');
            alert('Hexadecimal value: ' + hexadecimalValue);
        });
    }
    render() {
        return (
            <div>
                <JqxFormattedInput ref='myFormattedInput'
                    width={250} height={25} radix={'binary'} value={100001}
                />
                <div style={{ marginTop: 20 }}>
                    <JqxButton ref='getOctal' value='Get Octal Value' width={175} style={{ float: 'left' }}/> 
                    <JqxButton ref='getDecimal' value='Get Decimal Value' style={{ marginLeft: 5, float: 'left' }} width={175} />   
                    <JqxButton ref='getHexadecimal' value='Get Hexadecimal Value' style={{ marginLeft: 5, float: 'left' }} width={175} />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
