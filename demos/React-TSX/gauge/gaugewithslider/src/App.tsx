import * as React from 'react';
import { useEffect, useRef, useCallback, useState } from 'react';
import JqxGauge, { IGaugeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgauge';
import JqxSlider from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

const App = () => {
    const myGauge = useRef<JqxGauge>(null);
    const mySlider = useRef<JqxSlider>(null);

    const [gaugeOptions] = useState<IGaugeProps>({
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
    });

    useEffect(() => {
        myGauge.current?.setOptions({ value: 120 });
    }, []);

    const mySliderOnChange = useCallback(() => {
        const val = mySlider.current?.getOptions('value');
        if (val !== undefined) {
            myGauge.current?.setOptions({ value: val });
        }
    }, []);

    return (
        <div style={{ position: 'relative', height: '380px' }}>
            <JqxGauge
                ref={myGauge}
                animationDuration={1500}
                ranges={gaugeOptions.ranges}
                cap={gaugeOptions.cap}
                border={gaugeOptions.border}
                ticksMinor={gaugeOptions.ticksMinor}
                ticksMajor={gaugeOptions.ticksMajor}
                labels={gaugeOptions.labels}
                pointer={gaugeOptions.pointer}
            />
            <JqxSlider
                theme="material-purple"
                ref={mySlider}
                style={{ position: 'absolute', top: '250px', left: '93px' }}
                onChange={mySliderOnChange}
                width={180}
                value={120}
                min={0}
                max={220}
                ticksFrequency={20}
                mode="fixed"
                showButtons={false}
            />
        </div>
    );
};

export default App;