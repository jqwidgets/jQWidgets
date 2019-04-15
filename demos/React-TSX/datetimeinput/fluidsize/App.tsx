import * as React from 'react';
 


import JqxDateTimeInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatetimeinput';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }
    
    public render() {
        return (
            <JqxDateTimeInput theme={'material-purple'} width={'50%'} height={35} />
        );
    }
}

export default App;