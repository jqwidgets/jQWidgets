import * as React from 'react';
 


import JqxGauge, { IGaugeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgauge';
import JqxSlider from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

class App extends React.PureComponent<{}, IGaugeProps> {

    private myGauge = React.createRef<JqxGauge>();
    private mySlider = React.createRef<JqxSlider>();

    constructor(props: {}) {
        super(props);
        this.mySliderOnChange = this.mySliderOnChange.bind(this);

        this.state = {
            border: { style: { fill: '#8e9495', stroke: '#7b8384' } },
            cap: { size: '5%', style: { fill: '#2e79bb', stroke: '#2e79bb' } },
            labels: { position: 'outside', interval: 20 },
            pointer: { style: { fill: '#2e79bb' }, width: 5 },
            ranges: [
                { startValue: 0, endValue: 130, style: { fill: '#4cb848', stroke: '#4cb848' }, startDistance: 0, endDistance: 0 },
                { startValue: 130, endValue: 180, style: { fill: '#fad00b', stroke: '#fad00b' }, startDistance: 0, endDistance: 0 },
                { startValue: 180, endValue: 220, style: { fill: '#e53d37', stroke: '#e53d37' }, startDistance: 0, endDistance: 0 }
            ],
            ticksMajor: { interval: 20, size: '10%' },
            ticksMinor: { interval: 5, size: '5%' }
        }
    }

    public componentDidMount() {
        this.myGauge.current!.setOptions({ value: 120 });
    }

    public render() {

        return (
            <div style={{ position: 'relative', height: '380px' }}>
                <JqxGauge  ref={this.myGauge}
                    animationDuration={1500} ranges={this.state.ranges} cap={this.state.cap} border={this.state.border}
                    ticksMinor={this.state.ticksMinor} ticksMajor={this.state.ticksMajor}
                    labels={this.state.labels} pointer={this.state.pointer} />

                <JqxSlider theme={'material-purple'} ref={this.mySlider} style={{ position: 'absolute', top: '250px', left: '93px' }}
                    onChange={this.mySliderOnChange}
                    width={180} value={120} min={0} max={220}
                    ticksFrequency={20} mode={'fixed'} showButtons={false} />
            </div>
        );
    }

    private mySliderOnChange(): void {
        const val = this.mySlider.current!.getOptions('value');
        this.myGauge.current!.setOptions({ value: val });
    }  
}

export default App;