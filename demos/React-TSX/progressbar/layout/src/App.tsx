import * as React from 'react';
 


import JqxProgressBar from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxprogressbar';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <div>
                <div id="container" style={{ fontFamily: 'Verdana', fontSize: '12px', float: 'left' }}>
                    <b>Default Layout</b>
                    <JqxProgressBar theme={'material-purple'} width={300} height={40} value={50} />
                    <br />
                    <JqxProgressBar theme={'material-purple'} style={{ marginTop: '10px' }}
                        width={40} height={300} orientation={'vertical'} value={50} />

                    <div style={{ marginTop: '10px' }} id="verticalProgressBar" />
                </div>
                <div style={{ float: 'right', fontFamily: 'Verdana', fontSize: '12px' }} id="rightContainer">
                    <b>Reversed Layout</b>
                    <JqxProgressBar theme={'material-purple'} width={300} height={40} layout={'reverse'} value={50} />
                    <br />
                    <JqxProgressBar theme={'material-purple'} style={{ float: 'right' }}
                        width={40} height={300} orientation={'vertical'}
                        layout={'reverse'} value={50} />
                </div>
            </div>
        );
    }
}

export default App;