import React from 'react';
import ReactDOM from 'react-dom';

import JqxFormattedInput from '../../../jqwidgets-react/react_jqxformattedinput.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.getDecimal.on('click', () => {
            let decimalValue = this.refs.myFormattedInput.val('decimal');
            alert('Decimal Value: ' + decimalValue);
        });
        this.refs.getExponential.on('click', () => {
            let exponentialValue = this.refs.myFormattedInput.val('exponential');
            alert('Exponential Notation: ' + exponentialValue);
        });
        this.refs.getScientific.on('click', () => {
            let scientificValue = this.refs.myFormattedInput.val('scientific');
            alert('Scientific Notation: ' + scientificValue);
        });
        this.refs.getEngineering.on('click', () => {
            let engineeringValue = this.refs.myFormattedInput.val('engineering');
            alert('Engineering Notation: ' + engineeringValue);
        });
    }
    render() {
        return (
            <div>
                <JqxFormattedInput ref='myFormattedInput'
                    width={200} height={25} radix={'decimal'}
                    value={330000} decimalNotation={'exponential'}
                />
                <div style={{ marginTop: 20 }}>
                    <JqxButton ref='getDecimal' value='Get Decimal Value' style={{ float: 'left' }} width={175} />
                    <JqxButton ref='getExponential' value='Get Exponential Notation' style={{ marginLeft: 5, float: 'left' }} width={175} />
                    <br />
                    <br />
                    <JqxButton ref='getScientific' value='Get Scientific Notation' style={{ float: 'left' }} width={175} />
                    <JqxButton ref='getEngineering' value='Get Engineering Notation' style={{ marginLeft: 5, float: 'left' }} width={175} />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
