import * as React from 'react';
 


import JqxDateTimeInput, { IDateTimeInputProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatetimeinput';

class App extends React.PureComponent<{}, IDateTimeInputProps> {

    constructor(props: {}) {
        super(props);

        this.state = {
            max: new Date(2019, 11, 31),
            min: new Date(2017, 0, 1)
        }
    }

    public render() {
        return (
            <div>
                <div style={{ textAlign: 'center', width: '250px', fontFamily: 'Verdana', fontSize: '13px' }}>
                    The navigation is restricted from 01/01/2017 to 01/01/2020
                </div>
                <br />
                <JqxDateTimeInput theme={'material-purple'}
                    width={250} height={30} min={this.state.min} max={this.state.max} />
            </div>
        );
    }
}

export default App;