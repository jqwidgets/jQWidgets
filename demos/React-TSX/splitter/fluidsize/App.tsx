import * as React from 'react';
 


import './App.css';

import JqxSplitter from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxsplitter';

class App extends React.PureComponent<{}, {}> {
    private panels = [
        { size: "50%", min: "10%", collapsible: false },
        { size: '50%', min: "5%" }
    ];
    
    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <JqxSplitter theme={'material-purple'}
                width={"100%"}
                height={"100%"}
                panels={this.panels}
            >
                <div>
                    <JqxSplitter theme={'material-purple'} style={{ border: "none" }}
                        width={"100%"}
                        height={"100%"}
                        panels={[{ size: 200 }]}
                    >
                        <div>
                            Nested 2.1
                        </div>
                        <div>
                            Nested 2.2
                        </div>
                    </JqxSplitter>
                </div>
                <div>
                    <JqxSplitter theme={'material-purple'} style={{ border: "none" }}
                        width={"100%"}
                        height={"100%"}
                        panels={[{ size: "60%" }]}
                        orientation={"horizontal"}
                    >
                        <div>
                            Nested 1.1
                        </div>
                        <div>
                            Nested 1.2
                        </div>
                    </JqxSplitter>
                </div>
            </JqxSplitter>
        );
    }
}

export default App;
