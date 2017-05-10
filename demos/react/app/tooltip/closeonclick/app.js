import React from 'react';
import ReactDOM from 'react-dom';

import JqxTooltip from '../../../jqwidgets-react/react_jqxtooltip.js';

class App extends React.Component {
    render () {
        let imgStyle = { margin: 8 };
        let tooltipStyle = { float: 'left' };
        let position = 'bottom';
        return (
            <div style={{ marginLeft: 180, width: 400 }} id="container">

                    <JqxTooltip ref='filmPicture1' style={tooltipStyle}
                        position={position} name={'movieTooltip'}
                        autoHide={false}
                        content={'The Amazing Spider-man'}
                    >
                        <img style={imgStyle} src="../../../images/The_Amazng_Spider_Man.jpeg" />
                    </JqxTooltip>
                    
                    <JqxTooltip ref='filmPicture2' style={tooltipStyle}
                        position={position} name={'movieTooltip'}
                        autoHide={false}
                        content={'Harry Potter and the Deathly Hallows'}
                    >
                        <img style={imgStyle} src="../../../images/Harry_Potter_7_Part_1.jpg" />
                    </JqxTooltip>
                    
                    <JqxTooltip ref='filmPicture3' style={tooltipStyle}
                        position={position} name={'movieTooltip'}
                        autoHide={false}
                        content={'The Avengers'}
                    >
                        <img style={imgStyle} src="../../../images/The_Avengers.jpg" />
                    </JqxTooltip>
                
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
