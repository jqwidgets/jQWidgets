import * as React from 'react';
 


import './App.css';

import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxComplexInput, { IComplexInputProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcomplexinput';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxExpander from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxexpander';

export interface IState extends IComplexInputProps {
    selectedIndex: IDropDownListProps['selectedIndex'];
    source: IDropDownListProps['source'];
}

class App extends React.PureComponent<{}, IState> {

    private myComplexInput = React.createRef<JqxComplexInput>();

    constructor(props: {}) {
        super(props);
        this.notationsListOnChange = this.notationsListOnChange.bind(this);
        this.getRealDecimalOnClick = this.getRealDecimalOnClick.bind(this);
        this.getRealExponentialOnClick = this.getRealExponentialOnClick.bind(this);
        this.getRealScientificOnClick = this.getRealScientificOnClick.bind(this);
        this.getRealEngineeringOnClick = this.getRealEngineeringOnClick.bind(this);
        this.getImaginaryDecimalOnClick = this.getImaginaryDecimalOnClick.bind(this);
        this.getImaginaryExponentialOnClick = this.getImaginaryExponentialOnClick.bind(this);
        this.getImaginaryScientificOnClick = this.getImaginaryScientificOnClick.bind(this);
        this.getImaginaryEngineeringOnClick = this.getImaginaryEngineeringOnClick.bind(this);

        this.state = {
            decimalNotation: 'exponential',
            selectedIndex: 1,
            source: ['decimal', 'exponential', 'scientific', 'engineering']
        };
    }

    public render() {
        return (
            <div>
                <JqxComplexInput theme={'material-purple'} ref={this.myComplexInput} style={{ float: 'left' }}
                    width={250} height={25} value={'330000 - 200i'}
                    spinButtons={true} decimalNotation={this.state.decimalNotation} />

                <JqxExpander theme={'material-purple'} style={{ float: 'left', marginLeft: '50px' }}
                    width={450} height={400} toggleMode={'none'} showArrow={false}>
                    <div>Angular ComplexInput Notation Settings</div>
                    <div style={{ paddingLeft: '15px' }}>
                        <h4>Choose notation:</h4>
                        <JqxDropDownList theme={'material-purple'} style={{ marginTop: '20px' }} onChange={this.notationsListOnChange}
                            width={200} height={25} source={this.state.source}
                            autoDropDownHeight={true} selectedIndex={this.state.selectedIndex} />
                        <div style={{ marginTop: '20px' }}>
                            <h4>Real part</h4>
                            <JqxButton theme={'material-purple'} onClick={this.getRealDecimalOnClick} width={180}>
                                 Get Decimal Value
                            </JqxButton>
                            <JqxButton theme={'material-purple'} onClick={this.getRealExponentialOnClick} width={180}>
                                Get Exponential Notation
                            </JqxButton>
                            <br /> <br />
                            <JqxButton theme={'material-purple'} onClick={this.getRealScientificOnClick} width={180}>
                                Get Scientific Notation
                            </JqxButton>
                            <JqxButton theme={'material-purple'} onClick={this.getRealEngineeringOnClick} width={180}>
                                Get Engineering Notation
                            </JqxButton>
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <h4>Imaginary part</h4>
                            <JqxButton theme={'material-purple'} onClick={this.getImaginaryDecimalOnClick} width={180}>                                      
                                Get Decimal Value
                            </JqxButton>
                            <JqxButton theme={'material-purple'} onClick={this.getImaginaryExponentialOnClick} width={180}>
                                Get Exponential Notation
                            </JqxButton>
                            <br /> <br />
                            <JqxButton theme={'material-purple'} onClick={this.getImaginaryScientificOnClick} width={180}>
                                Get Scientific Notation
                            </JqxButton>
                            <JqxButton theme={'material-purple'} onClick={this.getImaginaryEngineeringOnClick} width={180}>
                                Get Engineering Notation
                            </JqxButton>
                        </div>
                    </div>
                </JqxExpander>
            </div>
        );
    }

    private notationsListOnChange(event: any): void {
        const args = event.args;
        if (args) {
            const index = args.index;
            let label = args.item.label;
            if (label === 'decimal') {
                label = 'default';
            }
            this.setState({
                decimalNotation: label,
                selectedIndex: index
            });
        }
    };

    private getRealDecimalOnClick(): void {
        const decimalValue = this.myComplexInput.current!.getReal();
        alert('Decimal value: ' + decimalValue);
    };

    private getRealExponentialOnClick(): void {
        const exponentialValue = this.myComplexInput.current!.getDecimalNotation('real', 'exponential');
        alert('Exponential notation: ' + exponentialValue);
    };

    private getRealScientificOnClick(): void {
        const scientificValue = this.myComplexInput.current!.getDecimalNotation('real', 'scientific');
        alert('Scientific notation: ' + scientificValue);
    };

    private getRealEngineeringOnClick(): void {
        const engineeringValue = this.myComplexInput.current!.getDecimalNotation('real', 'engineering');
        alert('Engineering notation: ' + engineeringValue);
    };

    private getImaginaryDecimalOnClick(): void {
        const decimalValue = this.myComplexInput.current!.getImaginary();
        alert('Decimal value: ' + decimalValue);
    };

    private getImaginaryExponentialOnClick(): void {
        const exponentialValue = this.myComplexInput.current!.getDecimalNotation('imaginary', 'exponential');
        alert('Exponential notation: ' + exponentialValue);
    };

    private getImaginaryScientificOnClick(): void {
        const scientificValue = this.myComplexInput.current!.getDecimalNotation('imaginary', 'scientific');
        alert('Scientific notation: ' + scientificValue);
    };

    private getImaginaryEngineeringOnClick(): void {
        const engineeringValue = this.myComplexInput.current!.getDecimalNotation('imaginary', 'engineering');
        alert('Engineering notation: ' + engineeringValue);
    };
}

export default App;