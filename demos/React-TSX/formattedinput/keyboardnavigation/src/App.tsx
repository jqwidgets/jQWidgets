import * as React from 'react';
 


import JqxFormattedInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxformattedinput';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <div>
                <JqxFormattedInput style={{ float: 'left' }}
                    width={250} height={25} radix={'hexadecimal'}
                    spinButtons={false} dropDown={true} value={'a1'} />

                <div style={{ fontFamily: 'Verdana', fontSize: '12px', width: '400px', marginLeft: '20px', float: 'left' }}>
                    <ul>
                        <li><b>Tab</b> - Like other widgets, the jqxFormattedInput widget receives focus by tabbing into it. Once focus is received, users will be able to use the keyboard to change the selection. A second tab will take the user out of the widget.</li>
                        <li><b>Shift+Tab</b> - reverses the direction of the tab order. Once in the widget, a Shift+Tab will take the user to the previous focusable element in the tab order.</li>
                        <li><b>Up/Down</b> arrow keys - select previous or next displayFormat option.</li>
                        <li><b>Alt Up/Down</b> arrow keys - opens or closes the popup.</li>
                        <li><b>Esc</b> - closes the popup.</li>
                        <li><b>Enter</b> - selects an item.</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;