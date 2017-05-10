import React from 'react';
import ReactDOM from 'react-dom';

import JqxNumberInput from '../../../jqwidgets-react/react_jqxnumberinput.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';
import JqxRadioButton from '../../../jqwidgets-react/react_jqxradiobutton.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';

class App extends React.Component {
    constructor() {
        super();

        let symboltypes = ['$', '%', 'None'];
        let digits = ['1', '2', '3', '4', '5', '6', '7', '8'];
        let decimaldigits = ['0', '1', '2', '3', '4'];

        this.state = {
            symboltypes: symboltypes,
            digits: digits,
            decimaldigits: decimaldigits
        }
    }

    componentDidMount() {
        this.refs.spinbuttons.on('change', (event) => {
            let checked = event.args.checked;
            this.refs.numericInput.spinButtons(checked);
        });

        this.refs.rightbutton.on('checked', () => {
            this.refs.numericInput.symbolPosition('right');
        });

        this.refs.leftbutton.on('checked', () => {
            this.refs.numericInput.symbolPosition('left');
        });

        this.refs.symboltype.on('select', (event) => {
            let index = event.args.index;
            if (index == 2) {
                this.refs.numericInput.symbol('');
            }
            else {
                let symbol = this.state.symboltypes[index];
                this.refs.numericInput.symbol(symbol);
            }
        });
        
        this.refs.decimaldigits.on('select', (event) => {
            let index = event.args.index;
            this.refs.numericInput.decimalDigits(this.state.decimaldigits[index]);
        });

        this.refs.digits.on('select', (event) => {
            let index = event.args.index;
            this.refs.numericInput.digits(this.state.digits[index]);
        });
    }
    render() {        
        return (
            <div id='jqxWidget' style={{ fontSize: 13, fontFamily: 'Verdana', float: 'left' }}>

                <JqxNumberInput ref='numericInput'
                    width={250} height={25} min={0}
                    symbol={'$'} spinButtons={true}
                />

                <div style={{ float: 'left' }}>
                    <JqxCheckBox style={{ marginTop: 20 }} ref='spinbuttons' value='Show Spin Buttons'
                        checked={true} />
                    <div style={{ marginTop: 10 }}>Symbol Position</div>
                    <JqxRadioButton ref='leftbutton' checked={true} style={{ marginTop: 5 }} >
                        Left
                    </JqxRadioButton>
                    <JqxRadioButton ref='rightbutton' style={{ marginTop: 5 }} >
                        Right
                    </JqxRadioButton>
                </div>

                <div style={{ marginLeft: 30, float: 'left' }}>
                    <div style={{ marginTop: 20, marginBottom: 10 }}>Symbol</div>
                    <JqxDropDownList ref='symboltype'
                        width={60} height={20} selectedIndex={0}
                        source={this.state.symboltypes} autoDropDownHeight={true}
                    />

                    <div style={{ marginTop: 20, marginBottom: 10 }}>Decimal Digits</div>
                    <JqxDropDownList ref='decimaldigits'
                        width={60} height={20} selectedIndex={2}
                        source={this.state.decimaldigits} autoDropDownHeight={true}
                    />

                    <div style={{ marginTop: 20, marginBottom: 10 }}>Digits</div>
                    <JqxDropDownList ref='digits'
                        width={60} height={20} selectedIndex={7}
                        source={this.state.digits} autoDropDownHeight={true}
                    />

                </div>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
