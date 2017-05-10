import React from 'react';
import ReactDOM from 'react-dom';

import JqxBarGauge from '../../../jqwidgets-react/react_jqxbargauge.js';

class App extends React.Component {
    render() {
        let labels =
            {
                formatFunction: (value) => {
                    return value + ' m';
                },
                precision: 1,
                indent: 15
            }
        return (
            <JqxBarGauge
                width={600} height={600} max={45} min={-45}
                endAngle={90} labels={labels} animationDuration={0}
                relativeInnerRadius={0.2} baseValue={0} startAngle={270}
                colorScheme={'scheme02'} values={[12, -35, -14.78, 29.5, 23.124, 41]}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
