import React from 'react';
import ReactDOM from 'react-dom';

import JqxGauge from '../../../jqwidgets-react/react_jqxgauge.js';
import JqxExpander from '../../../jqwidgets-react/react_jqxexpander.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';
import JqxRadioButton from '../../../jqwidgets-react/react_jqxradiobutton.js';

class App extends React.Component {
    componentDidMount() {
        let labels = { visible: true, position: 'inside' };

        this.refs.showLabelsCheckbox.on('change', (e) => {            
            labels.visible = e.args.checked;
            this.refs.myGauge.labels(labels);
        });
        this.refs.showRangesCheckbox.on('change', (e) => {
            this.refs.myGauge.showRanges(e.args.checked);
        });
        this.refs.showBorderCheckbox.on('change', (e) => {
            this.refs.myGauge.border({ visible: e.args.checked });
        });
        this.refs.outsideRadio.on('change', (e) => {
            if (e.args.checked) {
                labels.position = 'outside';
                this.refs.myGauge.labels(labels);
            }
        });
        this.refs.insideRadio.on('change', (e) => {
            if (e.args.checked) {
                labels.position = 'inside';
                this.refs.myGauge.labels(labels);
            }
        });
        // set gauge's value.
        this.refs.myGauge.value(220);
    }
    render() {
        let ranges =
            [
                { startValue: 0, endValue: 90, style: { fill: '#e2e2e2', stroke: '#e2e2e2' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
                { startValue: 90, endValue: 140, style: { fill: '#f6de54', stroke: '#f6de54' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
                { startValue: 140, endValue: 180, style: { fill: '#db5016', stroke: '#db5016' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
                { startValue: 180, endValue: 220, style: { fill: '#d02841', stroke: '#d02841' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 }
            ];

        let ticksMinor = { interval: 5, size: '5%' };

        let ticksMajor = { interval: 10, size: '10%' };

        let labels = { visible: true, position: 'inside' };

        let style = { stroke: '#ffffff', 'stroke-width': '1px', fill: '#ffffff' };

        let caption = { offset: [0, -25], value: 'jQWidgets', position: 'bottom' };

        return (
            <div style={{ width: 600 }}>
                <div style={{ float: 'left' }}>
                    <JqxGauge ref='myGauge'
                        value={0} colorScheme={'scheme04'} animationDuration={1500}
                        ranges={ranges} ticksMinor={ticksMinor} ticksMajor={ticksMajor}
                        labels={labels} style={style} caption={caption} cap={{ radius: 0.04 }}
                    />
                </div>
                <JqxExpander ref='myExpander' style={{ float: 'right' }}
                    width={200} showArrow={false} toggleMode={'none'}>
                    <div>Options</div>
                    <div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 10 }}>
                            <li style={{ padding: 3, fontFamily: 'Verdana', fontSize: 12 }}>
                                <JqxCheckBox ref='showLabelsCheckbox' value='Show Labels'
                                    width={150} checked={true}
                                />
                                <ul style={{ listStyle: 'none', padding: 0, marginTop: 10, marginLeft: 20, fontFamily: 'Verdana', fontSize: 12 }}>
                                    <li>
                                        <JqxRadioButton ref='insideRadio'
                                            width={150} checked={true}>
                                            Inside the Gauge
                                        </JqxRadioButton>
                                    </li>
                                    <li>
                                        <JqxRadioButton style={{ marginTop: 5 }} ref='outsideRadio'
                                            width={150}>
                                            Outside the Gauge
                                        </JqxRadioButton>
                                    </li>
                                </ul>
                            </li>
                            <li style={{ padding: 3, fontFamily: 'Verdana', fontSize: 12 }}>
                                <JqxCheckBox ref='showRangesCheckbox' value='Show Ranges'
                                    width={150} checked={true}
                                />
                            </li>
                            <li style={{ padding: 3, fontFamily: 'Verdana', fontSize: 12 }}>
                                <JqxCheckBox ref='showBorderCheckbox' value='Show Border'
                                    width={150} checked={true}
                                />
                            </li>
                        </ul>
                    </div>
                </JqxExpander>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
