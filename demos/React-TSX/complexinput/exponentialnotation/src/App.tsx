import * as React from 'react';

import './App.css';

import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxComplexInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcomplexinput';
import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxExpander from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxexpander';

const App = () => {
    const myComplexInput = React.useRef<any>(null);

    const [decimalNotation, setDecimalNotation] = React.useState<string>('exponential');
    const [selectedIndex, setSelectedIndex] = React.useState<number>(1);
    const [source] = React.useState<string[]>(['decimal', 'exponential', 'scientific', 'engineering']);

    const notationsListOnChange = (event: any) => {
        const args = event.args;
        if (args) {
            const index = args.index;
            let label = args.item.label;
            if (label === 'decimal') {
                label = 'default';
            }
            setDecimalNotation(label);
            setSelectedIndex(index);
        }
    };

    const getRealDecimalOnClick = () => {
        const decimalValue = myComplexInput.current!.getReal();
        alert('Decimal value: ' + decimalValue);
    };

    const getRealExponentialOnClick = () => {
        const exponentialValue = myComplexInput.current!.getDecimalNotation('real', 'exponential');
        alert('Exponential notation: ' + exponentialValue);
    };

    const getRealScientificOnClick = () => {
        const scientificValue = myComplexInput.current!.getDecimalNotation('real', 'scientific');
        alert('Scientific notation: ' + scientificValue);
    };

    const getRealEngineeringOnClick = () => {
        const engineeringValue = myComplexInput.current!.getDecimalNotation('real', 'engineering');
        alert('Engineering notation: ' + engineeringValue);
    };

    const getImaginaryDecimalOnClick = () => {
        const decimalValue = myComplexInput.current!.getImaginary();
        alert('Decimal value: ' + decimalValue);
    };

    const getImaginaryExponentialOnClick = () => {
        const exponentialValue = myComplexInput.current!.getDecimalNotation('imaginary', 'exponential');
        alert('Exponential notation: ' + exponentialValue);
    };

    const getImaginaryScientificOnClick = () => {
        const scientificValue = myComplexInput.current!.getDecimalNotation('imaginary', 'scientific');
        alert('Scientific notation: ' + scientificValue);
    };

    const getImaginaryEngineeringOnClick = () => {
        const engineeringValue = myComplexInput.current!.getDecimalNotation('imaginary', 'engineering');
        alert('Engineering notation: ' + engineeringValue);
    };

    return (
        <div>
            <JqxComplexInput
                theme={'material-purple'}
                ref={myComplexInput}
                style={{ float: 'left' }}
                width={250}
                height={25}
                value={'330000 - 200i'}
                spinButtons={true}
                decimalNotation={decimalNotation}
            />

            <JqxExpander
                theme={'material-purple'}
                style={{ float: 'left', marginLeft: '50px' }}
                width={450}
                height={400}
                toggleMode={'none'}
                showArrow={false}
            >
                <div>Angular ComplexInput Notation Settings</div>
                <div style={{ paddingLeft: '15px' }}>
                    <h4>Choose notation:</h4>
                    <JqxDropDownList
                        theme={'material-purple'}
                        style={{ marginTop: '20px' }}
                        onChange={notationsListOnChange}
                        width={200}
                        height={25}
                        source={source}
                        autoDropDownHeight={true}
                        selectedIndex={selectedIndex}
                    />
                    <div style={{ marginTop: '20px' }}>
                        <h4>Real part</h4>
                        <JqxButton theme={'material-purple'} onClick={getRealDecimalOnClick} width={180}>
                            Get Decimal Value
                        </JqxButton>
                        <JqxButton theme={'material-purple'} onClick={getRealExponentialOnClick} width={180}>
                            Get Exponential Notation
                        </JqxButton>
                        <br /> <br />
                        <JqxButton theme={'material-purple'} onClick={getRealScientificOnClick} width={180}>
                            Get Scientific Notation
                        </JqxButton>
                        <JqxButton theme={'material-purple'} onClick={getRealEngineeringOnClick} width={180}>
                            Get Engineering Notation
                        </JqxButton>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <h4>Imaginary part</h4>
                        <JqxButton theme={'material-purple'} onClick={getImaginaryDecimalOnClick} width={180}>
                            Get Decimal Value
                        </JqxButton>
                        <JqxButton theme={'material-purple'} onClick={getImaginaryExponentialOnClick} width={180}>
                            Get Exponential Notation
                        </JqxButton>
                        <br /> <br />
                        <JqxButton theme={'material-purple'} onClick={getImaginaryScientificOnClick} width={180}>
                            Get Scientific Notation
                        </JqxButton>
                        <JqxButton theme={'material-purple'} onClick={getImaginaryEngineeringOnClick} width={180}>
                            Get Engineering Notation
                        </JqxButton>
                    </div>
                </div>
            </JqxExpander>
        </div>
    );
};

export default App;