import * as React from 'react';
 


import JqxSlider from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

class App extends React.PureComponent<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <div>
                <div style={{ float: "left", fontFamily: "Verdana", fontSize: 12 }}>
                    <b>Default Layout</b>
                    <JqxSlider theme={'material-purple'}
                        height={50}
                        width={300}
                    />
                    <JqxSlider theme={'material-purple'}
                        height={300}
                        width={50}
                        orientation={"vertical"}
                    />
                </div>
                <div style={{ float: "right", fontFamily: "Verdana", fontSize: 12 }}>
                    <b>Reversed Layout</b>
                    <JqxSlider theme={'material-purple'}
                        height={50}
                        width={300}
                        layout={"reverse"}
                    />
                    <JqxSlider theme={'material-purple'} style={{ marginTop: 10, float: "right" }}
                        height={300}
                        width={50}
                        orientation={"vertical"}
                        layout={"reverse"}
                    />
                </div>
            </div>
        );
    }
}

export default App;
