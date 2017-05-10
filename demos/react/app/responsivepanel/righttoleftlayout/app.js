import React from 'react';
import ReactDOM from 'react-dom';

import JqxResponsivePanel from '../../../jqwidgets-react/react_jqxresponsivepanel.js';

class App extends React.Component {
    render() {
        return (
            <div id='ownerPanel' style={{ float: 'right', width: 600 }}>
                <div id='header' style={{ boxSizing: 'border-box', marginBottom: 2, width: '100%', height: 50, padding: '10px 0 0 10px' }}>
                    <div id='toggleResponsivePanel' />
                </div>
                <JqxResponsivePanel  ref='myResponsivePanel' style={{ float: 'right', display: 'inline' }}
                    width={250} height={'auto'} collapseBreakpoint={800} autoClose={false}
                    toggleButton={'#toggleResponsivePanel'} animationType={'none'} animationDirection={'right'}
                >
                    <div id='jqxResponsivePanel'>
                    <img src='../../images/leo.jpg' />
                    <br />
                    <strong>Leo</strong> the Lion is one of the earliest recognized constellations.
                    The Mesopotamians are known to have documented the 'lion' constellation. The Persians
                    called it Ser or Shir; the Turks, Artan; the Syrians, Aryo; the Jewish, Arye; the
                    Indians, Simha. These are all translated as 'lion.'
                        </div>
                </JqxResponsivePanel>
                
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
