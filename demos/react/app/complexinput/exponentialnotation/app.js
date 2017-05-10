import React from 'react';
import ReactDOM from 'react-dom';

import JqxComplexInput from '../../../jqwidgets-react/react_jqxcomplexinput.js';
import JqxExpander from '../../../jqwidgets-react/react_jqxexpander.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.notationsList.on('change', (event) => {
            let args = event.args;
            if (args) {
                let label = args.item.label;
                if (label === 'decimal') {
                    label = 'default';
                }
                this.refs.myComplexInput.decimalNotation(label);
            }
        });

        this.refs.getRealDecimal.on('click', () => {
            let decimalValue = this.refs.myComplexInput.getReal();
            alert('Decimal value: ' + decimalValue);
        });
        this.refs.getRealExponential.on('click', () => {
            let exponentialValue = this.refs.myComplexInput.getDecimalNotation('real', 'exponential');
            alert('Exponential notation: ' + exponentialValue);
        });
        this.refs.getRealScientific.on('click', () => {
            let scientificValue = this.refs.myComplexInput.getDecimalNotation('real', 'scientific');
            alert('Scientific notation: ' + scientificValue);
        });
        this.refs.getRealEngineering.on('click', () => {
            let engineeringValue = this.refs.myComplexInput.getDecimalNotation('real', 'engineering');
            alert('Engineering notation: ' + engineeringValue);
        });
        this.refs.getImaginaryDecimal.on('click', () => {
            let decimalValue = this.refs.myComplexInput.getImaginary();
            alert('Decimal value: ' + decimalValue);
        });
        this.refs.getImaginaryExponential.on('click', () => {
            let exponentialValue = this.refs.myComplexInput.getDecimalNotation('imaginary', 'exponential');
            alert('Exponential notation: ' + exponentialValue);
        });
        this.refs.getImaginaryScientific.on('click', () => {
            let scientificValue = this.refs.myComplexInput.getDecimalNotation('imaginary', 'scientific');
            alert('Scientific notation: ' + scientificValue);
        });
        this.refs.getImaginaryEngineering.on('click', () => {
            let engineeringValue = this.refs.myComplexInput.getDecimalNotation('imaginary', 'engineering');
            alert('Engineering notation: ' + engineeringValue);
        });
    }
    render() {
        let source = ['decimal', 'exponential', 'scientific', 'engineering'];
        return (
            <div>
                <JqxComplexInput ref='myComplexInput' style={{ float: 'left' }}
                    width={250} height={25} value={'330000 - 200i'}
                    spinButtons={true} decimalNotation={'exponential'}
                />
                <JqxExpander style={{ float: 'left', marginLeft: 50 }}
                    width={400} height={400} toggleMode={'none'} showArrow={false}
                >
                    <div>jqxComplexInput Notation Settings</div>
                    <div style={{ paddingLeft: 15 }}>
                        <h4>Choose notation:</h4>
                        <JqxDropDownList ref='notationsList' style={{ marginTop: 20 }}
                            width={200} height={25} autoDropDownHeight={true}
                            source={source} selectedIndex={1}
                        />
                        <div style={{ marginTop: 20 }}>
                            <h4>Real part</h4>
                            <JqxButton ref='getRealDecimal' style={{ display: 'inline-block' }}
                                value='Get decimal value' width={175}
                            />
                            <JqxButton ref='getRealExponential' style={{ marginLeft: 5, display: 'inline-block' }}
                                value='Get exponential notation' width={175}
                            />
                            <br /><br />
                            <JqxButton ref='getRealScientific' style={{ display: 'inline-block' }}
                                value='Get scientific notation' width={175}
                            />
                            <JqxButton ref='getRealEngineering' style={{ marginLeft: 5, display: 'inline-block' }}
                                value='Get engineering notation' width={175}
                            />
                        </div>
                        <div style={{ marginTop: 20 }}>
                            <h4>Imaginary part</h4>
                            <JqxButton ref='getImaginaryDecimal' style={{ display: 'inline-block' }}
                                value='Get decimal value' width={175}
                            />
                            <JqxButton ref='getImaginaryExponential' style={{ marginLeft: 5, display: 'inline-block' }}
                                value='Get exponential notation' width={175}
                            />
                            <br /><br />
                            <JqxButton ref='getImaginaryScientific' style={{ display: 'inline-block' }}
                                value='Get scientific notation' width={175}
                            />
                            <JqxButton ref='getImaginaryEngineering' style={{ marginLeft: 5, display: 'inline-block' }}
                                value='Get engineering notation' width={175}
                            />
                        </div>
                    </div>
                </JqxExpander>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
