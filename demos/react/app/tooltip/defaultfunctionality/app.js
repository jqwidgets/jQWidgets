import React from 'react';
import ReactDOM from 'react-dom';

import JqxTooltip from '../../../jqwidgets-react/react_jqxtooltip.js';

class App extends React.Component {
    render () {
        let imgStyle = { margin: 10 };
        let tooltipStyle = { float: 'left' };
        let containersStyle = { width: 400, float:'left' };
        return (
            <div style={{ width: 400 }} id="container">
                <div style={{ width: 400 }} >
                    <JqxTooltip style={tooltipStyle}
                      position={'mouse'} name={'movieTooltip'}
                      content={'<b>Title:</b> <i>The Amazing Spider-man</i><br /><b>Year:</b> 2012'}
                    >
                        <img style={imgStyle} src="../../../images/The_Amazng_Spider_Man.jpeg" />
                    </JqxTooltip>
                    <JqxTooltip style={tooltipStyle}
                      position={'mouse'} name={'movieTooltip'}
                      content={'<b>Title:</b> <i>The Avengers</i><br /><b>Year:</b> 2012'}
                    >
                        <img style={imgStyle} src="../../../images/The_Avengers.jpg" />
                    </JqxTooltip>
                    <JqxTooltip style={tooltipStyle}
                      position={'mouse'} name={'movieTooltip'}
                      content={'<b>Title:</b> <i>The Dark Knight Rises</i><br /><b>Year:</b> 2012'}
                    >
                        <img style={imgStyle} src="../../../images/The_Dark_Knight_Rises.jpg" />
                    </JqxTooltip>
                </div>
                <div style={containersStyle} >
                    <JqxTooltip style={tooltipStyle}
                      position={'mouse'} name={'movieTooltip'}
                      content={'<b>Title:</b> <i>Harry Potter and the Deathly Hallows - Part 1</i><br /><b>Year:</b> 2010'}
                    >
                        <img style={imgStyle} src="../../../images/Harry_Potter_7_Part_1.jpg" />
                    </JqxTooltip>
                    <JqxTooltip style={tooltipStyle}
                      position={'mouse'} name={'movieTooltip'}
                      content={'<b>Title:</b> <i>Harry Potter and the Deathly Hallows - Part 2</i><br /><b>Year:</b> 2011'}
                    >
                        <img style={imgStyle} src="../../../images/Harry_Potter_7_Part_2.jpg" />
                    </JqxTooltip>
                    <JqxTooltip style={tooltipStyle}
                      position={'mouse'} name={'movieTooltip'}
                      content={'<b>Title:</b> <i>Inception</i><br /><b>Year:</b> 2010'}
                    >
                        <img style={imgStyle} src="../../../images/Inception.jpg" />
                    </JqxTooltip>
                </div>
                <div style={containersStyle} >
                    <JqxTooltip style={tooltipStyle}
                      position={'mouse'} name={'movieTooltip'}
                      content={'<b>Title:</b> <i>Star Trek</i><br /><b>Year:</b> 2009'}
                    >
                        <img style={imgStyle} src="../../../images/Star_Trek.jpg" />
                    </JqxTooltip>
                    <JqxTooltip style={tooltipStyle}
                      position={'mouse'} name={'movieTooltip'}
                      content={'<b>Title:</b> <i>Star Wars</i> Episode III: <i>Revenge of the Sith</i><br /><b>Year:</b> 2005'}
                    >
                        <img style={imgStyle} src="../../../images/Star_Wars_Episode_III.jpg" />
                    </JqxTooltip>
                    <JqxTooltip style={tooltipStyle}
                      position={'mouse'} name={'movieTooltip'}
                      content={'<b>Title:</b> <i>Thor</i><br /><b>Year:</b> 2011'}
                    >
                        <img style={imgStyle} src="../../../images/Thor.jpg" />
                    </JqxTooltip>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
