import * as React from 'react';
import './App.css';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxComplexInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcomplexinput';

function App() {
    const myComplexInput = React.useRef<JqxComplexInput>(null);

    const getRealPart = () => {
        const realPart = myComplexInput.current!.getReal();
        alert(`Real part is ${realPart}`);
    };

    const getImaginaryPart = () => {
        const imaginaryPart = myComplexInput.current!.getImaginary();
        alert(`Imaginary part is ${imaginaryPart}`);
    };

    return (
        <div>
            <JqxComplexInput
                theme="material-purple"
                ref={myComplexInput}
                width={250}
                height={25}
                value="15 + 7.2i"
            />
            <div style={{ marginTop: '20px' }}>
                <JqxButton theme="material-purple" onClick={getRealPart} width={150}>
                    Get real part
                </JqxButton>
                <JqxButton theme="material-purple" onClick={getImaginaryPart} width={150}>
                    Get imaginary part
                </JqxButton>
            </div>
        </div>
    );
}

export default App;