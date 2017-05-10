import React from 'react';
import ReactDOM from 'react-dom';

import JqxGauge from '../../../jqwidgets-react/react_jqxgauge.js';
import JqxSlider from '../../../jqwidgets-react/react_jqxslider.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.mySlider.on('change', () => {
            let val = this.refs.mySlider.value();
            this.refs.myGauge.value(val);
        })

        this.refs.myGauge.value(120);
    }
    render() {
        let ranges =
            [
                { startValue: 0, endValue: 130, style: { fill: '#4cb848', stroke: '#4cb848' }, startDistance: 0, endDistance: 0 },
                { startValue: 130, endValue: 180, style: { fill: '#fad00b', stroke: '#fad00b' }, startDistance: 0, endDistance: 0 },
                { startValue: 180, endValue: 220, style: { fill: '#e53d37', stroke: '#e53d37' }, startDistance: 0, endDistance: 0 }
            ];

        let ticksMinor = { interval: 5, size: '5%' };

        let ticksMajor = { interval: 20, size: '10%' };

        let cap = { size: '5%', style: { fill: '#2e79bb', stroke: '#2e79bb' } };

        let border = { style: { fill: '#8e9495', stroke: '#7b8384', 'stroke-width': 1 } };

        let pointer = { style: { fill: '#2e79bb' }, width: 5 };

        return (
            <div style={{ position: 'relative', height: 380 }}>
                <JqxGauge ref='myGauge'
                    value={0} animationDuration={1500} border={border} pointer={pointer}
                    ranges={ranges} ticksMinor={ticksMinor} ticksMajor={ticksMajor} cap={cap}
                />
                <JqxSlider ref='mySlider' style={{ position: 'absolute', top: 250, left: 93 }}
                    width={180} value={120} min={0} max={220}
                    ticksFrequency={20} mode={'fixed'} showButtons={false}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
