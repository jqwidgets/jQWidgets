import * as React from 'react';
 


import JqxFormattedInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxformattedinput';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <JqxFormattedInput width={'30%'} height={25} radix={'binary'} spinButtons={true} value={10111} />
        );
    }
}

export default App;