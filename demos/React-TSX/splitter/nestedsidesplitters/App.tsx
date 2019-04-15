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
                panels={[{ size: '50%' }, { size: '50%' }]}
                orientation={"vertical"}
            >
                <div>
                    <JqxSplitter theme={'material-purple'} style={{ border: "none" }}
                        width={"100%"}
                        height={"100%"}
                        panels={[{ size: '50%' }, { size: '50%' }]}
                        orientation={"horizontal"}
                    >
                        <div>
                            West - North
                        </div>
                        <div>
                            West - South
                        </div>
                    </JqxSplitter>
                </div>
                <div>
                    <JqxSplitter theme={'material-purple'} style={{ border: "none" }}
                        width={"100%"}
                        height={"100%"}
                        panels={[{ size: '50%' }, { size: '50%' }]}
                        orientation={"horizontal"}
                    >
                        <div>
                            East - North
                        </div>
                        <div>
                            East - South
                        </div>
                    </JqxSplitter>
                </div>
            </JqxSplitter>
        );
    }
}

export default App;
