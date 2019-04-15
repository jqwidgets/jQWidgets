import * as React from 'react';
 


import JqxSplitter from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxsplitter';

class App extends React.PureComponent<{}, {}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <JqxSplitter theme={'material-purple'}
                // @ts-ignore
                width={850}
                height={850}
                panels={[{ size: 400, collapsible: false }]}
            >
                <div className={"splitter-panel"}>
                    Panel 1
                </div>
                <div className={"splitter-panel"}>
                    Panel 2
                </div>
            </JqxSplitter>
        );
    }
}

export default App;
