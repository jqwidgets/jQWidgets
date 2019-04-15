import * as React from 'react';
 


import JqxNotification from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnotification';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <JqxNotification theme={'material-purple'} style={{ marginTop: '5em' }}
                width={'80%'} blink={true} autoOpen={true} autoClose={false} 
                animationOpenDelay={800} template={'success'}
                opacity={0.9} position={'top-left'}>
                <span>This notification's width is 80%.</span>
            </JqxNotification>
        );
    }
}

export default App;