import React from 'react';
import ReactDOM from 'react-dom';

import JqxSlider from '../../../jqwidgets-react/react_jqxslider.js';

class App extends React.Component {
   render () {
        return (
            <div>

                <div style={{ fontFamily: 'Verdana', fontSize: 12, float: 'left' }}>
                    <b>Default Layout</b>
                    <div id='horizontalSlider'></div>
                    <JqxSlider ref='horizontalSlider'
                        width={300} height={50}
                    />
                    <JqxSlider ref='verticalSlider' style={{ marginTop: 10 }}
                        width={50} height={300}
                        orientation={'vertical'}
                    />
                </div>

                <div style={{ fontFamily: 'Verdana', fontSize: 12, float: 'right' }}>
                    <b>Reversed Layout</b>
                    <div id='mirrorHorizontalSlider'></div>
                    <JqxSlider ref='horizontalSlider'
                        width={300} height={50}
                        layout={'reverse'}
                    />
                    <JqxSlider ref='mirrorVerticalSlider' style={{ marginTop: 10, float: 'right' }}
                        width={50} height={300}
                        orientation={'vertical'} layout={'reverse'}
                    />
                </div>
                
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
