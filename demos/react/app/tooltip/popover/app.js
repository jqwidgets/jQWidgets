import React from 'react';
import ReactDOM from 'react-dom';

import JqxTooltip from '../../../jqwidgets-react/react_jqxtooltip.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {
        let toggle = false;
        this.refs.toggleTooltip.on('click', () => {
            if (toggle == false) {
                this.refs.filmPicture1.open();
                toggle = true;
            } else {
                this.refs.filmPicture1.close();
                toggle = false;
            }
        });
    }
    render () {
        let imgStyle = { margin: 8 };
        return (
            <div id="container">
                    
                <JqxButton width={100} height={25} ref='toggleTooltip' value="Toggle tooltip" />

                <JqxTooltip ref='filmPicture1' style={{ marginLeft: 180, width: 125 }}
                    position={'bottom'} name={'movieTooltip'}
                    autoHide={false} trigger={'none'} closeOnClick={false}
                    content={'The Amazing Spider-man'}
                >
                    <img style={imgStyle} src="../../../images/The_Amazng_Spider_Man.jpeg" />
                </JqxTooltip>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
