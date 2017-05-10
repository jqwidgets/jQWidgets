import React from 'react';
import ReactDOM from 'react-dom';

import JqxBulletChart from '../../../jqwidgets-react/react_jqxbulletchart.js';

class App extends React.Component {
    render() {
        let labelsFormatFunction = (value, position) => {
            let labelsColor;
            if (value < 10) {
                labelsColor = '#0099FF';
            }
            else if (value < 15) {
                labelsColor = '#006600';
            }
            else if (value < 20) {
                labelsColor = '#FF6600';
            }
            else {
                labelsColor = '#FF4526';
            }
            if (position == 'near') {
                return '<span style="color: ' + labelsColor + ';">' + (value * 1.8 + 32) + '°F</span>';
            }
            else {
                return value + '°C';
            }
        }
        let tooltipFormatFunction = (value, target) => {
            return '<div>Temperature on May 28: <strong>' +
                (value * 1.8 + 32) + '°F</strong> (' + value +
                '°C)</div><div>Average temperature in May: <strong>' +
                (target * 1.8 + 32) + '°F</strong> (' + target + '°C)</div>'
        }
        let ranges =
            [
                { startValue: 0, endValue: 10, color: '#0099FF', opacity: 1 },
                { startValue: 10, endValue: 15, color: '#006600', opacity: 1 },
                { startValue: 15, endValue: 20, color: '#FF6600', opacity: 1 },
                { startValue: 20, endValue: 25, color: '#FF4526', opacity: 1 }
            ];

        let pointer = { value: 11, size: '25%', color: '#181818' };

        let target = { value: 15, size: 4, color: '#181818' };

        let ticks = { position: 'both', interval: 5, size: 10 };

        return (
            <JqxBulletChart
                width={150} height={500} barSize={'35%'} ranges={ranges} ticks={ticks}
                title={'Temperature in Boston, Mass.'} description={'on 28 May'}
                pointer={pointer} target={target} labelsFormat={'c'} showTooltip={true}
                orientation={'vertical'} labelsFormatFunction={labelsFormatFunction}
                tooltipFormatFunction={tooltipFormatFunction}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
