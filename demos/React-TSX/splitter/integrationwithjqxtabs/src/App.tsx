import * as React from 'react';
 


import JqxSplitter from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxsplitter';
import JqxTabs from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtabs';

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
                panels={[{ size: '20%' }, { size: '80%' }]}
                orientation={"horizontal"}
            >
                <div>
                    Top Panel
                </div>
                <div>
                    <JqxSplitter theme={'material-purple'}
                        width={"100%"}
                        height={"100%"}
                        panels={[{ size: 200 }, { size: 200 }]}
                    >
                        <div>
                            Left Panel
                        </div>
                        <div>
                            <JqxTabs theme={'material-purple'} className={"jqx-hideborder jqx-hidescrollbars"}>
                                <ul>
                                    <li style={{ marginLeft: 30 }}>Tab 1</li>
                                    <li>Tab 2</li>
                                </ul>
                                <div>
                                    Content 1
                                </div>
                                <div>
                                    Content 2
                                </div>
                            </JqxTabs>
                        </div>
                    </JqxSplitter>
                </div>
            </JqxSplitter>
        );
    }
}

export default App;
