import * as React from 'react';
 


import './App.css';

import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxComplexInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcomplexinput';

class App extends React.PureComponent<{}> {

    private myComplexInput = React.createRef<JqxComplexInput>();

    constructor(props: {}) {
        super(props);
        this.getRealPart = this.getRealPart.bind(this);
        this.getImaginaryPart = this.getImaginaryPart.bind(this);
    }

    public render() {
        return (
            <div>
                <JqxComplexInput theme={'material-purple'} ref={this.myComplexInput}
                    width={250} height={25} value={'15 + 7.2i'} />

                <div style={{ marginTop: '20px' }}>
                    <JqxButton theme={'material-purple'} onClick={this.getRealPart} width={150}>
                        Get real part
                    </JqxButton>
                    <JqxButton theme={'material-purple'} onClick={this.getImaginaryPart} width={150} >
                        Get imaginary part
                    </JqxButton>
                </div>
            </div>
        );
    }

    private getRealPart(): void {
        const realPart = this.myComplexInput.current!.getReal();
        alert(`Real part is ${realPart}`);
    }

    private getImaginaryPart(): void {
        const imaginaryPart = this.myComplexInput.current!.getImaginary();
        alert(`Imaginary part is ${imaginaryPart}`);
    }
}

export default App;