import React from 'react';
import ReactDOM from 'react-dom';

import JqxBulletChart from '../../../jqwidgets-react/react_jqxbulletchart.js';

class App extends React.Component {
    render() {
        let ranges =
            [
                { startValue: 0, endValue: 200, color: '#CC0000', opacity: 1 },
                { startValue: 200, endValue: 250, color: '#FFD633', opacity: 1 },
                { startValue: 250, endValue: 300, color: '#00CC00', opacity: 1 }
            ];

        let pointer = { value: 270, label: 'Revenue 2014 YTD', size: '25%', color: '' };

        let target = { value: 260, label: 'Revenue 2013 YTD', size: 4, color: '' };

        let ticks = { position: 'far', interval: 50, size: 10 };

        return (
            <JqxBulletChart
                width={500} height={80} barSize={'40%'} ranges={ranges} ticks={ticks}
                title={'Revenue 2014 YTD'} description={'(U.S. $ in thousands)'}
                pointer={pointer} target={target} labelsFormat={'c'} showTooltip={true}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
