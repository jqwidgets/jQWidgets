import * as React from 'react';
 


import './App.css';

import JqxTooltip from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtooltip';

class App extends React.PureComponent<{}, any> {
    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <div style={{ marginLeft: 180, width: 400 }}>
                <JqxTooltip theme={'material-purple'} position={"bottom"} name={"moveTooltip"} autoHide={false}
                    content={"The Amazing Spider-man"}
                >
                    <img src='./../images/The_Amazng_Spider_Man.jpeg' />
                </JqxTooltip>

                <JqxTooltip theme={'material-purple'} position={"bottom"} name={"moveTooltip"} autoHide={false}
                    content={"Harry Potter and the Deathly Hallows"}
                >
                    <img src='./../images/Harry_Potter_7_Part_1.jpg' />
                </JqxTooltip>

                <JqxTooltip theme={'material-purple'} position={"bottom"} name={"moveTooltip"} autoHide={false}
                    content={"The Avengers"}
                >
                    <img src='./../images/The_Avengers.jpg' />
                </JqxTooltip>
            </div>
        );
    }
}

export default App;
