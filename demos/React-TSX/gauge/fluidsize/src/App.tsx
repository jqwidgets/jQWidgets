import * as React from 'react';
 


import JqxGauge, { IGaugeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgauge';

class App extends React.PureComponent<{}, IGaugeProps> {

    constructor(props: {}) {
        super(props);

        this.state = {           
            ranges: [
                { startValue: 0, endValue: 55, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 5, startWidth: 1 },
                { startValue: 55, endValue: 110, style: { fill: '#fbd109', stroke: '#fbd109' }, endWidth: 10, startWidth: 5 },
                { startValue: 110, endValue: 165, style: { fill: '#ff8000', stroke: '#ff8000' }, endWidth: 13, startWidth: 10 },
                { startValue: 165, endValue: 220, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 16, startWidth: 13 }
            ],           
            ticksMajor: { interval: 20, size: '9%' },
            ticksMinor: { interval: 10, size: '5%' }
        }
    }

    public render() {

        return (
            <JqxGauge 
                width={'40%'} ranges={this.state.ranges} ticksMinor={this.state.ticksMinor}
                ticksMajor={this.state.ticksMajor} value={0} colorScheme={'scheme05'} animationDuration={1200} />
        );
    }
}

export default App;