import React from 'react';
import ReactDOM from 'react-dom';

import JqxSlider from '../../../jqwidgets-react/react_jqxslider.js';

class App extends React.Component {
   render () {
        return (
            <JqxSlider ref='mySlider'
                height={60} width={400}
                value={7} min={0} max={20}
                ticksFrequency={5} showMinorTicks={true}
                minorTicksFrequency={1}
                showTickLabels={true}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
