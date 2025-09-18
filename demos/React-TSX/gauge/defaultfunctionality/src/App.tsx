import * as React from 'react';
import { useEffect, useRef } from 'react';
import './App.css';
import JqxGauge, { IGaugeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgauge';
import JqxLinearGauge, { ILinearGaugeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlineargauge';

const App = () => {
    const myGauge = useRef<JqxGauge>(null);
    const myLinearGauge = useRef<JqxLinearGauge>(null);
    const gaugeValue = useRef<HTMLDivElement>(null);

    const labelsLinear: ILinearGaugeProps['labels'] = {
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
    };

    const ranges: IGaugeProps['ranges'] = [
        { startValue: 0, endValue: 55, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 5, startWidth: 1 },
        { startValue: 55, endValue: 110, style: { fill: '#fbd109', stroke: '#fbd109' }, endWidth: 10, startWidth: 5 },
        { startValue: 110, endValue: 165, style: { fill: '#ff8000', stroke: '#ff8000' }, endWidth: 13, startWidth: 10 },
        { startValue: 165, endValue: 220, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 16, startWidth: 13 }
    ];

    const rangesLinear: ILinearGaugeProps['ranges'] = [
        { startValue: -10, endValue: 10, style: { fill: '#FFF157', stroke: '#FFF157' } },
        { startValue: 10, endValue: 35, style: { fill: '#FFA200', stroke: '#FFA200' } },
        { startValue: 35, endValue: 60, style: { fill: '#FF4800', stroke: '#FF4800' } }
    ];

    const ticksMajor: IGaugeProps['ticksMajor'] = { interval: 10, size: '9%' };
    const ticksMinor: IGaugeProps['ticksMinor'] = { interval: 5, size: '5%' };
    const ticksMajorLinear: ILinearGaugeProps['ticksMajor'] = { size: '10%', interval: 10 };
    const ticksMinorLinear: ILinearGaugeProps['ticksMinor'] = { size: '5%', interval: 2.5, style: { 'stroke-width': 1, stroke: '#aaaaaa' } };

    useEffect(() => {
        myGauge.current?.setOptions({ value: 140 });
        myLinearGauge.current?.setOptions({ value: 40 });
    }, []);

    const onValueChanging = (event: any): void => {
        if (gaugeValue.current) {
            gaugeValue.current.innerHTML = Math.round(event.args.value) + ' kph';
        }
    };

    return (
        <div className="main-container">
            <div style={{ float: 'left' }}>
                <JqxGauge
                    ref={myGauge}
                    onValueChanging={onValueChanging}
                    ranges={ranges}
                    ticksMinor={ticksMinor}
                    ticksMajor={ticksMajor}
                    colorScheme={'scheme05'}
                    animationDuration={1200}
                />
                <div ref={gaugeValue} className="gaugeValue" />
            </div>
            <JqxLinearGauge
                ref={myLinearGauge}
                style={{ marginLeft: '60px', float: 'left' }}
                width={100}
                height={350}
                max={60}
                orientation={'vertical'}
                ticksMajor={ticksMajorLinear}
                ticksMinor={ticksMinorLinear}
                pointer={{ size: '5%' }}
                colorScheme={'scheme05'}
                labels={labelsLinear}
                ranges={rangesLinear}
                animationDuration={1500}
            />
        </div>
    );
};

export default App;