import * as React from 'react';
 


import './App.css';

import JqxTooltip from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtooltip';

class App extends React.PureComponent<{}, any> {
    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <div style={{ width: 400 }}>
                <JqxTooltip theme={'material-purple'} position={"mouse"} name={"moveTooltip"}
                    content={"<b>Title:</b> <i>The Amazing Spider-man</i><br /><b>Year:</b> 2012"}
                >
                    <img src='https://www.jqwidgets.com/react/images/The_Amazng_Spider_Man.jpeg' />
                </JqxTooltip>

                <JqxTooltip theme={'material-purple'} position={"mouse"} name={"moveTooltip"}
                    content={"<b>Title:</b> <i>The Avengers</i><br /><b>Year:</b> 2012"}
                >
                    <img src='https://www.jqwidgets.com/react/images/The_Avengers.jpg' />
                </JqxTooltip>

                <JqxTooltip theme={'material-purple'} position={"mouse"} name={"moveTooltip"}
                    content={"<b>Title:</b> <i>The Dark Knight Rises</i><br /><b>Year:</b> 2012"}
                >
                    <img src='https://www.jqwidgets.com/react/images/The_Dark_Knight_Rises.jpg' />
                </JqxTooltip>

                <JqxTooltip theme={'material-purple'} position={"mouse"} name={"moveTooltip"}
                    content={"<b>Title:</b> <i>Harry Potter and the Deathly Hallows - Part 1</i><br /><b>Year:</b> 2010"}
                >
                    <img src='https://www.jqwidgets.com/react/images/Harry_Potter_7_Part_1.jpg' />
                </JqxTooltip>

                <JqxTooltip theme={'material-purple'} position={"mouse"} name={"moveTooltip"}
                    content={"<b>Title:</b> <i>Harry Potter and the Deathly Hallows - Part 2</i><br /><b>Year:</b> 2011"}
                >
                    <img src='https://www.jqwidgets.com/react/images/Harry_Potter_7_Part_2.jpg' />
                </JqxTooltip>

                <JqxTooltip theme={'material-purple'} position={"mouse"} name={"moveTooltip"}
                    content={"<b>Title:</b> <i>Inception</i><br /><b>Year:</b> 2010"}
                >
                    <img src='https://www.jqwidgets.com/react/images/Inception.jpg' />
                </JqxTooltip>

                <JqxTooltip theme={'material-purple'} position={"mouse"} name={"moveTooltip"}
                    content={"<b>Title:</b> <i>Star Trek</i><br /><b>Year:</b> 2009"}
                >
                    <img src='https://www.jqwidgets.com/react/images/Star_Trek.jpg' />
                </JqxTooltip>

                <JqxTooltip theme={'material-purple'} position={"mouse"} name={"moveTooltip"}
                    content={"<b>Title:</b> <i>Star Wars</i> Episode III: <i>Revenge of the Sith</i> <b>Year:</b> 2005"}
                >
                    <img src='https://www.jqwidgets.com/react/images/Star_Wars_Episode_III.jpg' />
                </JqxTooltip>

                <JqxTooltip theme={'material-purple'} position={"mouse"} name={"moveTooltip"}
                    content={"<b>Title:</b> <i>Thor</i><br /><b>Year:</b> 2011"}
                >
                    <img src='https://www.jqwidgets.com/react/images/Thor.jpg' />
                </JqxTooltip>

            </div>
        );
    }
}

export default App;
