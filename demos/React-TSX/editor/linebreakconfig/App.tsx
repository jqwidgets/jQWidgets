import * as React from 'react';
 


import JqxEditor from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxeditor';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <JqxEditor theme={'material-purple'}
                // @ts-ignore
                width={'100%'} height={400} lineBreak={'div'} />
        );
    }
}

export default App;