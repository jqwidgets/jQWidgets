import * as React from 'react';
 


import JqxProgressBar from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxprogressbar';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <JqxProgressBar theme={'material-purple'} width={300} height={30} value={50} rtl={true} />
        );
    }
}

export default App;