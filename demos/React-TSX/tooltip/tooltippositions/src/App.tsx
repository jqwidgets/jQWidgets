import * as React from 'react';
 


import './App.css';

import JqxTooltip from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtooltip';

class App extends React.PureComponent<{}, any> {
    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <div style={{ marginLeft: 200, width: 110 }}>
                <JqxTooltip theme={'material-purple'} position={"left"} name={"moveTooltip"}
                    content={"The Amazing Spider-man"}
                >
                    <img src='https://www.jqwidgets.com/react/images/The_Amazng_Spider_Man.jpeg' />
                </JqxTooltip>

                <JqxTooltip theme={'material-purple'} position={"right"} name={"moveTooltip"}
                    content={"Harry Potter and the Deathly Hallows"}
                >
                    <img src='https://www.jqwidgets.com/react/images/Harry_Potter_7_Part_1.jpg' />
                </JqxTooltip>

                <JqxTooltip theme={'material-purple'} position={"bottom"} name={"moveTooltip"}
                    content={"The Avengers"}
                >
                    <img src='https://www.jqwidgets.com/react/images/The_Avengers.jpg' />
                </JqxTooltip>
            </div>
        );
    }
}

export default App;
