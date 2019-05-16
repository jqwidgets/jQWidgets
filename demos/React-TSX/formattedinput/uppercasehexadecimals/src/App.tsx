import * as React from 'react';
 


import JqxFormattedInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxformattedinput';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <JqxFormattedInput
                width={250} height={25} radix={16} value={'1CF'} upperCase={true} spinButtons={true} />
        );
    }
}

export default App;