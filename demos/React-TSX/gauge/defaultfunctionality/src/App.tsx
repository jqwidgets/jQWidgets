import * as React from 'react';
 


import './App.css';

import JqxGauge, { IGaugeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgauge';
import JqxLinearGauge, { ILinearGaugeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlineargauge';

export interface IState extends IGaugeProps {
    labelsLinear: ILinearGaugeProps['labels'];
    rangesLinear: ILinearGaugeProps['ranges'];
    ticksMinorLinear: ILinearGaugeProps['ticksMinor'];
    ticksMajorLinear: ILinearGaugeProps['ticksMajor'];
}

class App extends React.PureComponent<{}, IState> {

    private myGauge = React.createRef<JqxGauge>();
    private myLinearGauge = React.createRef<JqxLinearGauge>();
    private gaugeValue = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
        this.onValueChanging = this.onValueChanging.bind(this);

        this.state = {
            labelsLinear: {
                formatValue: (value: number, position: string): string => {
                    if (position === 'far') {
                        value = (9 / 5) * value + 32;
                        if (value === -76) {
                            return 'F';
                        }
                        return value + 'F';
                    }
                    if (value === -60) {
                        return 'C';
                    }
                    return value + 'C';
                },
                interval: 20,
            },
            ranges: [
                { startValue: 0, endValue: 55, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 5, startWidth: 1 },
                { startValue: 55, endValue: 110, style: { fill: '#fbd109', stroke: '#fbd109' }, endWidth: 10, startWidth: 5 },
                { startValue: 110, endValue: 165, style: { fill: '#ff8000', stroke: '#ff8000' }, endWidth: 13, startWidth: 10 },
                { startValue: 165, endValue: 220, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 16, startWidth: 13 }
            ],
            rangesLinear: [
                { startValue: -10, endValue: 10, style: { fill: '#FFF157', stroke: '#FFF157' } },
                { startValue: 10, endValue: 35, style: { fill: '#FFA200', stroke: '#FFA200' } },
                { startValue: 35, endValue: 60, style: { fill: '#FF4800', stroke: '#FF4800' } }
            ],
            ticksMajor: { interval: 10, size: '9%' },
            ticksMajorLinear: { size: '10%', interval: 10 },
            ticksMinor: { interval: 5, size: '5%' },
            ticksMinorLinear: { size: '5%', interval: 2.5, style: { 'stroke-width': 1, stroke: '#aaaaaa' } }
        }
    }

    public componentDidMount() {
        this.myGauge.current!.setOptions({ value: 140 });
        this.myLinearGauge.current!.setOptions({ value: 40 });
    }

    public render() {

        return (
            <div className="main-container">
                <div style={{ float: 'left' }}>
                    <JqxGauge  ref={this.myGauge} onValueChanging={this.onValueChanging}
                        ranges={this.state.ranges} ticksMinor={this.state.ticksMinor}
                        ticksMajor={this.state.ticksMajor} colorScheme={'scheme05'} animationDuration={1200}
                    />
                    <div ref={this.gaugeValue} className="gaugeValue" />
                </div>

                <JqxLinearGauge ref={this.myLinearGauge} style={{ marginLeft: '60px', float: 'left' }}
                    width={100} height={350} max={60} orientation={'vertical'} ticksMajor={this.state.ticksMajorLinear}
                    ticksMinor={this.state.ticksMinorLinear} pointer={{ size: '5%' }} colorScheme={'scheme05'}
                    labels={this.state.labelsLinear} ranges={this.state.rangesLinear} animationDuration={1500}
                />
            </div>
        );
    }

    private onValueChanging(event: any): void {
        this.gaugeValue.current!.innerHTML = Math.round(event.args.value) + ' kph';
    }
}

export default App;