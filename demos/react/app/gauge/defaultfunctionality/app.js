import React from 'react';
import ReactDOM from 'react-dom';

import JqxGauge from '../../../jqwidgets-react/react_jqxgauge.js';

class App extends React.Component {
  componentDidMount(){
    document.getElementById('svgChart').children[2].style.fill = 'white';
    this.refs.Gauge.on('valueChanging', (event) => {
      document.getElementById('gaugeValue').innerHTML = Math.round(event.args.value) + ' kph';
    });
    this.refs.Gauge.value(140);
  }
  render() {
    let ranges =
    [
      { startValue: 0, endValue: 55, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 5, startWidth: 1 },
      { startValue: 55, endValue: 110, style: { fill: '#fbd109', stroke: '#fbd109' }, endWidth: 10, startWidth: 5 },
      { startValue: 110, endValue: 165, style: { fill: '#ff8000', stroke: '#ff8000' }, endWidth: 13, startWidth: 10 },
      { startValue: 165, endValue: 220, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 16, startWidth: 13 }
    ];

    let ticksMinor = { interval: 5, size: '5%' };

    let ticksMajor = { interval: 10, size: '9%' };

    return (
      <div style={{ position: 'relative' }}>
        <JqxGauge ref='Gauge' style={{ float: 'left' }}
          value={0} colorScheme={'scheme05'} animationDuration={1200}
          ranges={ranges} ticksMinor={ticksMinor} ticksMajor={ticksMajor}
        />
        <div id="gaugeValue" style={{ position: 'absolute', top: 235, left: 132, fontFamily: 'Sans-Serif', textAlign: 'center', fontSize: 17, width: 70 }}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
