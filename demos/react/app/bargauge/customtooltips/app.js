import React from 'react';
import ReactDOM from 'react-dom';

import JqxBarGauge from '../../../jqwidgets-react/react_jqxbargauge.js';

class App extends React.Component {
    render() {
        let players = [25, 46, 6, 55, 14, 22, 57, 40, 87, 20];
        let boundary = 33;
        let title = { text: 'Ranking', subtitle: '(boundary - ' + boundary + ' points)' };
        let labels =
            {
                formatFunction: (value) => {
                    let realVal = parseInt(value);
                    return realVal + ' pts';
                },
                font: { size: 12 },
                indent: 10
            }
        let tooltip =
            {
                classname: 'myTooltip',
                formatFunction: (value) => {
                    let realVal = parseInt(value);
                    let player = players.indexOf(realVal) + 1;
                    return ('Player ' + player + ': ' + realVal + ' points');
                },
                visible: true
            }
        return (
            <JqxBarGauge
                width={570} height={570} max={90} labels={labels}
                colorScheme={'scheme04'} values={players} baseValue={boundary}
                tooltip={tooltip} startAngle={180} endAngle={-65}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
