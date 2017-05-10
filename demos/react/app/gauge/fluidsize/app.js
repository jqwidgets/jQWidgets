import React from 'react';
import ReactDOM from 'react-dom';

import JqxGauge from '../../../jqwidgets-react/react_jqxgauge.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {
        let count = 0;
        this.refs.myButton.on('click', () => {
            count++;
            if (count % 2 == 0) {
                this.refs.myGauge.setOptions({ width: 200, height: 300 });
            }
            else {
                this.refs.myGauge.setOptions({ width: 400, height: 500 });
            }
        });
    }
    render() {
        let ranges =
            [
                { startValue: 0, endValue: 55, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 5, startWidth: 1 },
                { startValue: 55, endValue: 110, style: { fill: '#fbd109', stroke: '#fbd109' }, endWidth: 10, startWidth: 5 },
                { startValue: 110, endValue: 165, style: { fill: '#ff8000', stroke: '#ff8000' }, endWidth: 13, startWidth: 10 },
                { startValue: 165, endValue: 220, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 16, startWidth: 13 }
            ];

        let ticksMinor = { interval: 10, size: '5%' };

        let ticksMajor = { interval: 20, size: '9%' };

        return (
            <div>
                <JqxGauge ref='myGauge'
                    width={'40%'} value={0} colorScheme={'scheme05'} animationDuration={1200}
                    ranges={ranges} ticksMinor={ticksMinor} ticksMajor={ticksMajor}
                />
                <JqxButton ref='myButton' value='Change Size' />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
