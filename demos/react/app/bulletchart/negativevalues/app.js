import React from 'react';
import ReactDOM from 'react-dom';

import JqxBulletChart from '../../../jqwidgets-react/react_jqxbulletchart.js';

class App extends React.Component {
    render() {
        let ranges =
            [
                { startValue: -50, endValue: 150, color: '#000000', opacity: 0.5 },
                { startValue: 150, endValue: 200, color: '#000000', opacity: 0.3 },
                { startValue: 200, endValue: 250, color: '#000000', opacity: 0.1 }
            ];

        let pointer = { value: -20, label: 'Profit', size: '25%', color: 'Black' };

        let target = { value: 200, label: 'Target profit', size: 4, color: 'Black' };

        let ticks = { position: 'far', interval: 50, size: 10 };

        return (
            <JqxBulletChart
                width={500} height={80} barSize={'40%'} ranges={ranges}
                title={'Profit'} description={'(1000s)'} ticks={ticks}
                pointer={pointer} target={target} showTooltip={true}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
