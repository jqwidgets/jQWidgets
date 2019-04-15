import * as React from 'react';
 


import './App.css';

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
                height={600}
                panels={[{ size: '50%', collapsible: false }, { size: '50%' }]}
                orientation={"horizontal"}
            >
                <div>
                    <JqxTabs theme={'material-purple'} className={"jqx-hideborder jqx-hidescrollbars"} width={"100%"} height={"100%"}>
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
                <div>
                    <JqxSplitter theme={'material-purple'}
                        width={"100%"}
                        height={300}
                        panels={[{ size: '50%' }]}
                    >
                        <div>
                            <JqxTabs theme={'material-purple'} className={"jqx-hideborder jqx-hidescrollbars"} width={"100%"} height={"100%"}>
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
                        <div>
                            <JqxTabs theme={'material-purple'} className={"jqx-hideborder jqx-hidescrollbars"} width={"100%"} height={"100%"}>
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
