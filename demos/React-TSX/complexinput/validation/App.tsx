import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxComplexInput, { IComplexInputProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcomplexinput';

class App extends React.PureComponent<{}, IComplexInputProps> {

    constructor(props: {}) {
        super(props);
        this.btnOnClick = this.btnOnClick.bind(this);

        this.state = {
            value: '15 + 7.2i'
        };
    }

    public render() {
        return (
            <div>
                <JqxComplexInput theme={'material-purple'}
                    width={250} height={25} value={this.state.value} spinButtons={true} />
                <br />
                <div style={{ marginTop: '20px' }} />

                <JqxButton theme={'material-purple'} onClick={this.btnOnClick} width={200}>
                    Set wrong value: "11- 2ii"
                </JqxButton>
            </div>
        );
    } 

    private btnOnClick(): void {
        this.setState({
            value: '11- 2ii'
        });
    }
}

export default App;