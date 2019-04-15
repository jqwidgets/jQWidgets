import * as React from 'react';
 


import './App.css';

import JqxSplitter from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxsplitter';

class App extends React.PureComponent<{}, {}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            // mainSplitter
            <JqxSplitter theme={'material-purple'}
                // @ts-ignore
                width={850}
                height={850}
                panels={[{ size: '50%' }, { size: '50%' }]}
                orientation={"horizontal"}
            >
                <div>
                    {/* firstNested */}
                    <JqxSplitter theme={'material-purple'} className="jqx-splitter-nested"
                        width={"100%"}
                        height={"100%"}
                        panels={[{ size: 300, collapsible: false }]}
                        orientation={"vertical"}
                    >
                        <div>
                            {/* secondNested */}
                            <JqxSplitter theme={'material-purple'} className="jqx-splitter-nested"
                                width={"100%"}
                                height={"100%"}
                                panels={[{ size: 150 }]}
                                orientation={"horizontal"}
                            >
                                <div>
                                    <span>Panel 1</span>
                                </div>
                                <div>
                                    <span>Panel 2</span>
                                </div>
                            </JqxSplitter>
                        </div>
                        <div>
                            <span>Panel 3</span>
                        </div>
                    </JqxSplitter>
                </div>
                <div>
                    {/* thirdNested */}
                    <JqxSplitter theme={'material-purple'} className="jqx-splitter-nested"
                        width={"100%"}
                        height={"100%"}
                        panels={[{ size: 150, collapsible: false }]}
                        orientation={"horizontal"}
                    >
                        <div>
                            <span>Panel 4</span>
                        </div>
                        <div>
                            <span>Panel 5</span>
                        </div>
                    </JqxSplitter>
                </div>
            </JqxSplitter>
        );
    }
}

export default App;
