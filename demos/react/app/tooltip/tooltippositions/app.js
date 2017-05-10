import React from 'react';
import ReactDOM from 'react-dom';

import JqxTooltip from '../../../jqwidgets-react/react_jqxtooltip.js';

class App extends React.Component {
    render () {
        let imgStyle = { margin: 8 };
        return (
            <div style={{ marginLeft: 200, width: 120 }} id="container">

                    <JqxTooltip ref='filmPicture1'
                        position={'left'} name={'movieTooltip'}
                        content={'The Amazing Spider-man'}
                    >
                        <img style={imgStyle} src="../../../images/The_Amazng_Spider_Man.jpeg" />
                    </JqxTooltip>
                    
                    <JqxTooltip ref='filmPicture2'
                        position={'right'} name={'movieTooltip'}
                        content={'Harry Potter and the Deathly Hallows'}
                    >
                        <img style={imgStyle} src="../../../images/Harry_Potter_7_Part_1.jpg" />
                    </JqxTooltip>
                    
                    <JqxTooltip ref='filmPicture3'
                        position={'bottom'} name={'movieTooltip'}
                        content={'The Avengers'}
                    >
                        <img style={imgStyle} src="../../../images/The_Avengers.jpg" />
                    </JqxTooltip>
                
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
